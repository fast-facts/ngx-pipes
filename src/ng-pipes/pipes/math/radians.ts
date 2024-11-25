import { Pipe, PipeTransform } from '@angular/core';
import { isNumberFinite } from '../helpers/helpers';

@Pipe({
    name: 'radians',
    standalone: false
})
export class RadiansPipe implements PipeTransform {
  transform(degrees: number): number {
    if (!isNumberFinite(degrees)) {
      return NaN;
    }

    return (degrees * Math.PI) / 180;
  }
}
