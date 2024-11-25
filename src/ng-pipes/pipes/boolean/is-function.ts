import { Pipe, PipeTransform } from '@angular/core';
import { isFunction } from '../helpers/helpers';

@Pipe({
    name: 'isFunction',
    standalone: false
})
export class IsFunctionPipe implements PipeTransform {
  transform(input: any): boolean {
    return isFunction(input);
  }
}
