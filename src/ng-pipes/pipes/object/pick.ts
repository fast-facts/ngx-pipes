import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'pick' })
export class PickPipe implements PipeTransform {
  transform<T extends Array<any>>(obj: T, ...args: any): T;
  transform<T, K extends (T extends GenericRecord<any> ? (keyof T)[] : never)>(obj: T, ...args: K): T extends GenericRecord<any> ? (K extends never ? T : Pick<T, K[number]>) : T;

  transform(obj: any, ...args: any[]) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return args.reduce((o, k) => {
      return Object.assign(o, { [k]: obj[k] });
    }, {});
  }
}
