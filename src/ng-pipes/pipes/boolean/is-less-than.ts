import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isLessThan',
    standalone: false
})
export class IsLessThanPipe implements PipeTransform {
  transform(input: number, other: number): boolean {
    return input < other;
  }
}
