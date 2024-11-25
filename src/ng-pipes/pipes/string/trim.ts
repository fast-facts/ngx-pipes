import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({
    name: 'trim',
    standalone: false
})
export class TrimPipe implements PipeTransform {
  transform(text: string, chars = '\\s'): string {
    return isString(text) ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '') : text;
  }
}
