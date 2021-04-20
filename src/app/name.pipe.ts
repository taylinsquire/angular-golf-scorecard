import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './interfaces/player';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(players: Player[]): Player[] {
    let playerName;
    for (let i = 1; i < players.length; i++) {
      playerName = players[i].name;
      players.forEach((player, index) => {
        if(index !== i && player.name === playerName) {
          players[i].name += ' Gilmore';
        }
      })
    }

    return players;
  }

}
