import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({
    name: 'values',
    standalone: false
})
export class ValuesPipe implements PipeTransform {
  transform<T extends any[]>(obj: T): T;
  transform<T>(obj: T): T extends GenericRecord<any> ? any[] : T;

  transform(obj: any) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).map(k => obj[k]);
  }
}
