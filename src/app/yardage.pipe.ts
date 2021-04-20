import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yardage'
})
export class YardagePipe implements PipeTransform {

  transform(value: any[], teeBox: number): unknown {
    let total = 0;
    value.forEach(hole => {
      total += hole.teeBoxes[teeBox].yards;
    })
    return total;
  }

}
