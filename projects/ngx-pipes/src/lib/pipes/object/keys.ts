import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform<T extends any[]>(obj: T): T;
  transform<T>(obj: T): T extends any[] ? T : T extends GenericRecord<any> ? string[] : T;

  transform(obj: any) {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj);
  }
}
