import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';

@Pipe({ name: 'omit' })
export class OmitPipe implements PipeTransform {
  transform(obj: any, ...args: Array<string>): any {
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
