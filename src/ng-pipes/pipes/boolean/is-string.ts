import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({
    name: 'isString',
    standalone: false
})
export class IsStringPipe implements PipeTransform {
  transform(input: any): boolean {
    return isString(input);
  }
}
