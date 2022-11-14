import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attAdded'
})
export class AttAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value+(value*rate/100);
  }

}
