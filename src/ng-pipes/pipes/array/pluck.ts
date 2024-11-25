import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey, isObject } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({
    name: 'pluck', pure: false,
    standalone: false
})
export class PluckPipe implements PipeTransform {
  transform<T extends GenericRecord<any>[]>(input: T, map: string): any[];
  transform<T extends GenericRecord<any>>(input: T, map: string): any;
  transform<T>(input: T, map?: string): T;

  transform(input: any, map: string) {
    if (Array.isArray(input)) {
      return input.map(e => extractDeepPropertyByMapKey(e, map));
    }

    return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
  }
}
