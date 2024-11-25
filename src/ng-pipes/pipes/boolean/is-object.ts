import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';

@Pipe({
    name: 'isObject',
    standalone: false
})
export class IsObjectPipe implements PipeTransform {
  transform(input: any): boolean {
    return isObject(input);
  }
}
