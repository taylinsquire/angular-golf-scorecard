import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  playersList: Player[] = [];

  constructor() {}

  async setPlayers(plist: Player[]) {
    this.playersList = plist;
  }

  get players(): Player[] {
    return this.playersList;
  }

  getTotalScore(name: string) {
    let score = 0;
    let player = this.playersList.find((player) => player.name === name);
    player.holes.forEach((hole) => {
      score += hole.score;
    });
    return score;
  }
}
