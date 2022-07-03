import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
  transform<T extends Array<any>>(input: T, size?: number): T[];
  transform<T extends string>(input: T, size?: number): string[][];
  transform<T>(input: T, size?: number): T;

  transform(input: any, size = 1) {
    if (isString(input)) {
      return this.chunk(input
        .split(''), size);
    }

    return Array.isArray(input) ? this.chunk(input, size) : input;
  }

  private chunk(input: any[], size: number) {
    return Array(Math.ceil(input.length / size))
      .fill([])
      .map((_, index) => index * size)
      .map(begin => input.slice(begin, begin + size));
  }
}
