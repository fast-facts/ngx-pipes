import { Pipe, PipeTransform } from '@angular/core';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'fromPairs' })
export class FromPairsPipe implements PipeTransform {
  transform<T extends Array<any>>(input: T): GenericRecord<any>;
  transform<T>(input: T): T;

  transform(input: any) {
    if (!Array.isArray(input)) {
      return input;
    }

    return input.reduce((obj, arr) => {
      if (!Array.isArray(arr)) {
        return obj;
      }

      const [prop, val] = arr;

      obj[prop] = val;

      return obj;
    }, {});
  }
}
