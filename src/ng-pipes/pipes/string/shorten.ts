import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  transform(input: string, length?: number, suffix?: string, wordBreak?: boolean): string;
  transform(input: any, length?: number, suffix?: string, wordBreak?: boolean): any;

  transform(text: any, length = 0, suffix = '', wordBreak = true): string {
    if (!isString(text)) {
      return text;
    }

    if (text.length > length) {
      if (wordBreak) {
        return text.slice(0, length) + suffix;
      }

      if (~text.indexOf(' ', length)) {
        return text.slice(0, text.indexOf(' ', length)) + suffix;
      }
    }

    return text;
  }
}
