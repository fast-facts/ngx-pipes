import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tail',
    standalone: false
})
export class TailPipe implements PipeTransform {
  transform<T extends any[]>(input: T, num?: number): T;
  transform<T>(input: T, num?: number): T;

  transform(input: any, num = 0) {
    return Array.isArray(input) ? input.slice(num) : input;
  }
}
