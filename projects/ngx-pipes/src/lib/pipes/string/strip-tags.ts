import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stripTags' })
export class StripTagsPipe implements PipeTransform {
  transform(text: string, ...allowedTags: string[]): string {
    return allowedTags.length > 0
      // eslint-disable-next-line no-useless-escape
      ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
      : text.replace(/<(?:.|\s)*?>/g, '');
  }
}
