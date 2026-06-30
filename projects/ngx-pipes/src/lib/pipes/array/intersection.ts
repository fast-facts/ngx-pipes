import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'intersection' })
export class IntersectionPipe implements PipeTransform {
  transform<T extends any[]>(input: T, ...args: T): T;
  transform<T>(input: T, ...args: any[]): T;

  transform(input: any, ...args: any[]) {
    if (!Array.isArray(input)) {
      return input;
    }

    return args.reduce((n, c) => n.filter((e: any) => !!~c.indexOf(e)), input);
  }
}
