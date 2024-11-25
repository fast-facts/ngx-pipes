import { Pipe, PipeTransform } from '@angular/core';
import { getKeysTwoObjects, isDeepEqual, isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({
    name: 'diffObj',
    standalone: false
})
export class DiffObjPipe implements PipeTransform {
  transform<T extends any[]>(obj: T, original: any): GenericRecord<never>;
  transform<T>(obj: T, original: any): T extends GenericRecord<any> ? Partial<T> : GenericRecord<never>;

  transform(obj: any, original: any) {
    if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
      return {};
    }

    return getKeysTwoObjects(obj, original).reduce((diff: any, key: any) => {
      if (!isDeepEqual(original[key], obj[key])) {
        diff[key] = obj[key];
      }

      return diff;
    }, {});
  }
}
