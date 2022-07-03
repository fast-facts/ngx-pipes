import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'some' })
export class SomePipe implements PipeTransform {
  transform<T extends Array<any>>(input: T, predicate?: Predicate): boolean;
  transform<T>(input: T, predicate?: Predicate): T;

  transform(input: any, predicate: Predicate) {
    return Array.isArray(input) ? input.some(predicate) : input;
  }
}

type Predicate = (value: any, index: number, array: any[]) => boolean;