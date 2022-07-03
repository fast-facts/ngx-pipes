import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'without' })
export class WithoutPipe implements PipeTransform {
  transform<T extends Array<any>>(input: T, args: T): T;
  transform<T>(input: T, args?: T): T;

  transform(input: any, args: any[] = []) {
    return Array.isArray(input)
      ? input.filter(e => !~args.indexOf(e))
      : input;
  }
}
