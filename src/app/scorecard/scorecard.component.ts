import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Player } from '../interfaces/player';
import { PlayerService } from '../services/player-service.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss'],
})
export class ScorecardComponent implements OnInit {
  course$: Observable<any>;
  debug: boolean = false;
  players: Player[];

  constructor(private courseService: CourseService, private router: Router, private playerService: PlayerService) {
    if (this.courseService.isCourseSelected) {
      this.course$ = this.courseService.getCourseByIdObservable();
    } else {
      this.router.navigate(['/courses'])
    }
    this.players = this.playerService.players;
    this.courseService.getTotalPar(0);
  }

  ngOnInit(): void {}

  onDebug(): void {
    this.debug = !this.debug;
  }
}
