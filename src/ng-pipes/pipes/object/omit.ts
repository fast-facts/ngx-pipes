import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'omit' })
export class OmitPipe implements PipeTransform {
  transform<T extends Array<any>>(obj: T, ...args: any): T;
  transform<T, K extends (T extends GenericRecord<any> ? (keyof T)[] : never)>(obj: T, ...args: K): T extends GenericRecord<any> ? (K extends never ? T : Omit<T, K[number]>) : T;

  transform(obj: any, ...args: any[]) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return (
      Object.keys(obj)
        .filter(k => !~args.indexOf(k))
        .reduce((o, k) => {
          return Object.assign(o, { [k]: obj[k] });
        }, {})
    );
  }
}
