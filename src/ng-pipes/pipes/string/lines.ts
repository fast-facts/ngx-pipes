import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({
    name: 'lines',
    standalone: false
})
export class LinesPipe implements PipeTransform {
  transform(text: string, chars?: string): string[];
  transform<T>(text: T, chars?: string): T;

  transform(text: any, chars = '\\s') {
    return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
  }
}
