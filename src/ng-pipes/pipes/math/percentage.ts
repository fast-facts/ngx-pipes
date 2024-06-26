import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentage' })
export class PercentagePipe implements PipeTransform {
  transform(num: number, total?: number, floor?: boolean): number;
  transform<T>(num: T, total?: number, floor?: boolean): T;

  transform(num: number, total = 100, floor = false) {
    if (isNaN(num)) {
      return num;
    }

    const percent = (num * 100) / total;

    return floor ? Math.floor(percent) : percent;
  }
}
