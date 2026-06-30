import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'replaceRegex' })
export class ReplaceRegexPipe implements PipeTransform {
  transform(text: string, pattern?: string, replaceWith?: string): string;
  transform<T>(text: T, pattern?: string, replaceWith?: string): T;

  transform(text: any, pattern: string, replaceWith = '') {
    if (!isString(text)) {
      return text;
    }

    return text.replace(new RegExp(pattern, 'g'), replaceWith);
  }
}
