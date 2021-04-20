import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'par'
})
export class ParPipe implements PipeTransform {

  transform(value: any[], teeBox: number): unknown {
    let total = 0;
    value.forEach(hole => {
      total += hole.teeBoxes[teeBox].par;
    })
    return total;
  }

}
