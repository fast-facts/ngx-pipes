import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'diff' })
export class DiffPipe implements PipeTransform {
  transform<T extends any[]>(input: T, ...args: T[]): T;
  transform<T>(input: T, ...args: any[]): T;

  transform(input: any, ...args: any[]) {
    if (!Array.isArray(input)) {
      return input;
    }

    return args.reduce((d, c) => d.filter((e: any) => !~c.indexOf(e)), input);
  }
}
