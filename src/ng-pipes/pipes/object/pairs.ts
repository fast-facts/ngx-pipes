import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
  transform<T extends Array<any>>(obj: T): T;
  transform<T>(obj: T): T extends GenericRecord<any> ? [string, any][] : T;

  transform(obj: any) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.entries(obj);
  }
}
