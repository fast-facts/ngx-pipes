import { Pipe, PipeTransform } from '@angular/core';
import {
  extractDeepPropertyByMapKey,
  extractDeepPropertyByParentMapKey,
  isBoolean,
  isNumberFinite,
  isString,
  isUndefined,
} from '../helpers/helpers';

@Pipe({
    name: 'filterBy',
    standalone: false
})
export class FilterByPipe implements PipeTransform {
  transform<K, T extends K[]>(input: T, props: string[], search?: any, strict?: boolean): T;
  transform<T>(input: T, props?: string[], search?: any, strict?: boolean): T;

  transform(input: any, props: string[], search: any = '', strict = false) {
    if (
      !Array.isArray(input) ||
      (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))
    ) {
      return input;
    }

    const terms = String(search)
      .toLowerCase()
      .split(',');

    return input.filter(obj => {
      return props.some(prop => {
        return terms.some(term => {
          const value = extractDeepPropertyByMapKey(obj, prop);
          const { props, tail } = extractDeepPropertyByParentMapKey(obj, prop);

          if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
            return props.some(parent => {
              const str = String(parent[tail]).toLowerCase();

              return strict ? str === term : !!~str.indexOf(term);
            });
          }

          if (isUndefined(value)) {
            return false;
          }

          const strValue: string = String(value).toLowerCase();

          return strict ? term === strValue : !!~strValue.indexOf(term);
        });
      });
    });
  }
}
