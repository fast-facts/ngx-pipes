import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'union' })
export class UnionPipe implements PipeTransform {
  transform<T extends any[]>(input: T, args: T): T;
  transform<T>(input: T, args?: T): T;

  transform(input: any, args: any[] = []) {
    if (!Array.isArray(input) || !Array.isArray(args)) {
      return input;
    }

    return args.reduce((newArr, currArr) => {
      return newArr.concat(
        currArr.reduce((noDupArr: any[], curr: any) => {
          return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
        }, [])
      );
    }, input);
  }
}
