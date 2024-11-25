import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isEqualTo',
    standalone: false
})
export class IsEqualToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    // eslint-disable-next-line eqeqeq
    return input == other;
  }
}
