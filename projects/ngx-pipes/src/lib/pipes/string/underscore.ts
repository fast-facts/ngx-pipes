import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'underscore' })
export class UnderscorePipe implements PipeTransform {
  transform(text: string, chars?: string): string;
  transform<T>(text: T, chars?: string): T;

  transform(text: any, chars = '\\s') {
    return isString(text)
      ? text
        .trim()
        .replace(/\s+/g, '')
        .replace(/[A-Z]/g, (c: string, k: any) => {
          return k ? `_${c.toLowerCase()}` : c.toLowerCase();
        })
      : text;
  }
}
