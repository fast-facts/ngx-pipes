import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'range',
    standalone: false
})
export class RangePipe implements PipeTransform {
  transform(start: number, count: number, step?: number): number[];
  transform(start?: number, count?: number, step?: number): [];

  transform(start = 1, count = 0, step = 1) {
    return Array(count)
      .fill('')
      .map((v, i) => step * i + start);
  }
}
