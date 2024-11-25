import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'max',
    standalone: false
})
export class MaxPipe implements PipeTransform {
  transform(arr: number | number[]): number {
    return Array.isArray(arr) ? Math.max(...arr) : arr;
  }
}
