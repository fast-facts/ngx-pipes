import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pow' })
export class PowerPipe implements PipeTransform {
  transform(num: number, power?: number): number;
  transform(num: any, power?: number): any;

  transform(num: any, power = 2) {
    return !isNaN(num) ? num ** power : num;
  }
}
