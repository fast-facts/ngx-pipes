import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truthify',
    standalone: false
})
export class TrurthifyPipe implements PipeTransform {
  transform<T extends any[]>(input: T): T;
  transform<T>(input: T): T;

  transform(input: any) {
    return Array.isArray(input) ? input.filter(e => !!e) : input;
  }
}
