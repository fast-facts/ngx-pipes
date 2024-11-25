import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'initial',
    standalone: false
})
export class InitialPipe implements PipeTransform {
  transform<T extends any[]>(input: T, num?: number): T;
  transform<T>(input: T, num?: number): T;

  transform(input: any, num = 0) {
    return Array.isArray(input) ? input.slice(0, input.length - num) : input;
  }
}
