import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform<T extends Array<any>>(input: T): T;
  transform<T>(input: T): T;

  transform(input: any) {
    if (isString(input)) {
      return input
        .split('')
        .reverse()
        .join('');
    }

    return Array.isArray(input) ? input.slice().reverse() : input;
  }
}
