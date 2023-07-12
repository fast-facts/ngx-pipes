import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'every' })
export class EveryPipe implements PipeTransform {
  transform<T extends any[]>(input: T, predicate?: Predicate): boolean;
  transform<T>(input: T, predicate?: Predicate): false;

  transform(input: any[], predicate?: Predicate) {
    return Array.isArray(input) ? input.every(predicate) : false;
  }
}

type Predicate = (value: any, index: number, array: any[]) => boolean;
