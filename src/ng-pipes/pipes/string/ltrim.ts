import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({
    name: 'ltrim',
    standalone: false
})
export class LeftTrimPipe implements PipeTransform {
  transform(text: string, chars = '\\s'): string {
    return isString(text) ? text.replace(new RegExp(`^[${chars}]+`), '') : text;
  }
}
