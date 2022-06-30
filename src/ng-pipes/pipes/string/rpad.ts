import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'rpad' })
export class RightPadPipe implements PipeTransform {
  transform(str: string, length = 1, padCharacter = ' '): string {
    if (!isString(str) || str.length >= length) {
      return str;
    }
    while (str.length < length) {
      str = str + padCharacter;
    }

    return str;
  }
}
