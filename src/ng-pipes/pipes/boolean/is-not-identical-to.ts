import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isNotIdenticalTo',
    standalone: false
})
export class IsNotIdenticalToPipe implements PipeTransform {
  transform(input: any, other: any): boolean {
    return input !== other;
  }
}
