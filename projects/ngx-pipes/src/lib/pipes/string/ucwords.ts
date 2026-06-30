import { Pipe, PipeTransform } from '@angular/core';
import { isString, ucFirst } from '../helpers/helpers';

@Pipe({ name: 'ucwords' })
export class UcWordsPipe implements PipeTransform {
  transform(text: string): string;
  transform<T>(text: T): T;

  transform(text: any) {
    if (isString(text)) {
      return text
        .split(' ')
        .map((sub: any) => ucFirst(sub))
        .join(' ');
    }

    return text;
  }
}
