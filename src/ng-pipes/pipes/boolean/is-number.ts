import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from '../helpers/helpers';

@Pipe({
    name: 'isNumber',
    standalone: false
})
export class IsNumberPipe implements PipeTransform {
  transform(input: any): boolean {
    return isNumber(input);
  }
}
