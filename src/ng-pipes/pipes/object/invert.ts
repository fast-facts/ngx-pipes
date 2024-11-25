import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({
    name: 'invert',
    standalone: false
})
export class InvertPipe implements PipeTransform {
  transform<T extends any[]>(obj: T): T;
  transform<T>(obj: T): T extends GenericRecord<any> ? GenericRecord<any> : T;

  transform(obj: any) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).reduce((o, k) => {
      return Object.assign(o, { [obj[k]]: k });
    }, {});
  }
}
