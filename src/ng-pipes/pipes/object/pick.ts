import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../helpers/helpers';

@Pipe({ name: 'pick' })
export class PickPipe implements PipeTransform {
  transform(obj: any, ...args: Array<string>): any {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return args.reduce((o, k) => {
      return Object.assign(o, { [k]: obj[k] });
    }, {});
  }
}
