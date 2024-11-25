import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey, isObject, isUndefined } from '../helpers/helpers';

@Pipe({
    name: 'unique',
    standalone: false
})
export class UniquePipe implements PipeTransform {
  transform<T extends any[]>(input: T, propertyName: string): T;
  transform<T>(input: T, propertyName?: string): T;

  transform(input: any, propertyName?: string) {
    const uniques: boolean[] = [];

    return Array.isArray(input)
      ? isUndefined(propertyName)
        ? input.filter((e, i) => input.indexOf(e) === i)
        : input.filter((e, i) => {
          let value = extractDeepPropertyByMapKey(e, propertyName);
          value = isObject(value) ? JSON.stringify(value) : value;

          if (isUndefined(value) || uniques[value]) {
            return false;
          }

          uniques[value] = true;

          return true;
        })
      : input;
  }
}
