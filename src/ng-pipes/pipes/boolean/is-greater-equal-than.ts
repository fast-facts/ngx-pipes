import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isGreaterEqualThan',
    standalone: false
})
export class IsGreaterEqualThanPipe implements PipeTransform {
  transform(input: number, other: number): boolean {
    return input >= other;
  }
}
