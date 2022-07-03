import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sample' })
export class SamplePipe implements PipeTransform {
  transform<T extends Array<any>>(input: T, len?: number): T;
  transform<T>(input: T, len?: number): T;

  transform(input: any, len = 1) {
    if (!Array.isArray(input)) {
      return input;
    }

    let sample: any[] = [];
    const tmp = [...input];
    const l = len < tmp.length ? len : tmp.length;
    for (let i = 0; i < l; ++i) {
      sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
    }

    return sample;
  }
}
