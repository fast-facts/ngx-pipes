import { Pipe, PipeTransform } from '@angular/core';
import { isString, ucFirst } from '../helpers/helpers';

@Pipe({ name: 'ucfirst' })
export class UcFirstPipe implements PipeTransform {
  transform(text: string): string;
  transform<T>(text: T): T;

  transform(text: any) {
    return isString(text) ? ucFirst(text) : text;
  }
}
