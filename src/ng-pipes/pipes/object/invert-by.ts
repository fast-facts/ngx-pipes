import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'invertBy' })
export class InvertByPipe implements PipeTransform {
  transform<T extends Array<any>>(obj: T): T;
  transform<T>(obj: T, cb?: (val: any) => string): T extends GenericRecord<any> ? GenericRecord<any> : T;

  transform(obj: any, cb?: any) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).reduce((o: any, k: string) => {
      const key = cb ? cb(obj[k]) : obj[k];

      return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
    }, {});
  }
}
