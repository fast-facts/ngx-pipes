import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({
    name: 'shorten',
    standalone: false
})
export class ShortenPipe implements PipeTransform {
  transform(text: string, length?: number, suffix?: string, wordBreak?: boolean): string;
  transform<T>(text: T, length?: number, suffix?: string, wordBreak?: boolean): T;

  transform(text: any, length = 0, suffix = '', wordBreak = true) {
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
