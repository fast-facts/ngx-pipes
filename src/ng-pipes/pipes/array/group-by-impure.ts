import { Pipe, PipeTransform } from '@angular/core';
import { GroupByPipe } from './group-by';

@Pipe({ name: 'groupByImpure', pure: false })
export class GroupByImpurePipe extends GroupByPipe implements PipeTransform { }
