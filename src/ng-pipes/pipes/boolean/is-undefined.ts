import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from '../helpers/helpers';

@Pipe({
    name: 'isUndefined',
    standalone: false
})
export class IsUndefinedPipe implements PipeTransform {
  transform(input: any): boolean {
    return isUndefined(input);
  }
}
