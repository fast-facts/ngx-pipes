import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sliceSafe',
    standalone: false
})
export class SlicePipe implements PipeTransform {
  transform<T extends any[]>(input: T, start?: number, end?: number): T;
  transform<T>(input: T, start?: number, end?: number): T;

  transform(input: any, start?: number, end?: number) {
    return Array.isArray(input) ? input.slice(start, end) : input;
  }
}
