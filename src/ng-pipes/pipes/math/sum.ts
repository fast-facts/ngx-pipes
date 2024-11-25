import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sum',
    standalone: false
})
export class SumPipe implements PipeTransform {
  transform(num: number[]): number;
  transform<T>(num: T): T;

  transform(arr: number[]) {
    return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr, 0) : arr;
  }
}
