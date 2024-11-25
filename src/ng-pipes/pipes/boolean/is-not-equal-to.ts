import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isNotEqualTo',
    standalone: false
})
export class IsNotEqualToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    // eslint-disable-next-line eqeqeq
    return input != other;
  }
}
