import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Player } from '../interfaces/player';
import { PlayerService } from '../services/player-service.service';
import { NamePipe } from '../name.pipe';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss'],
})
export class PlayerSelectComponent implements OnInit {
  course$: Observable<any>;
  players: Player[];
  playerAmount: number;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private playerService: PlayerService,
    private namePipe: NamePipe
  ) {
    if (this.courseService.isCourseSelected) {
      this.course$ = this.courseService.getCourseByIdObservable();
    } else {
      this.router.navigate(['/courses']);
    }
    this.players = playerService.players;
  }

  ngOnInit(): void {}

  addPlayer(): void {
    let holes = [];
    for (let i = 0; i < 18; i++) {
      holes.push({ score: 0 });
    }
    if (!(this.players.length >= 4)) {
      this.players.push({
        name: '',
        teeBox: -1,
        holes: holes,
        totalScore: 0,
        totalPar: 0,
        totalYardage: 0,
      });
    }
  }

  removePlayer(id) {
    this.players = this.players.filter((_, index) => index !== id);
  }

  submitPlayers() {
    this.players = this.namePipe.transform(this.players);
    this.playerService.setPlayers(this.players).then(() => {
      this.router.navigate(['/scorecard']);
    });
  }

  get formsEmpty(): boolean {
    if (this.players.length === 0) {
      return true
    }
    let empty = false;
    this.players.forEach((player) => {
      if (player.name === '' || player.teeBox === -1) {
        empty = true;
      }
    });
    return empty;
  }

  get maxPlayers(): boolean {
    return this.players.length >= 4;
  }
}
