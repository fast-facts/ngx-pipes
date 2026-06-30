import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey, isFunction } from '../helpers/helpers';
import type { GenericRecord } from '../helpers/helpers';

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
  transform<T extends any[]>(input: T, discriminator?: any, delimiter?: string): GenericRecord<T>;
  transform<T>(input: T, discriminator?: any, delimiter?: string): T;

  transform(input: any, discriminator: any = [], delimiter = '|') {
    if (!Array.isArray(input)) {
      return input;
    }

    return this.groupBy(input, discriminator, delimiter);
  }

  private groupBy(list: any[], discriminator: any, delimiter: string) {
    return list.reduce((acc: any, payload: string) => {
      const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);

      acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];

      return acc;
    }, {});
  }

  private extractKeyByDiscriminator(discriminator: any, payload: string, delimiter: string) {
    if (isFunction(discriminator)) {
      return discriminator(payload);
    }

    if (Array.isArray(discriminator)) {
      return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join(delimiter);
    }

    return extractDeepPropertyByMapKey(payload, discriminator as string);
  }
}
