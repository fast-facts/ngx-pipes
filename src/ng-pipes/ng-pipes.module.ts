import { NgModule } from '@angular/core';
import { NgArrayPipesModule } from './pipes/array/index';
import { NgObjectPipesModule } from './pipes/object/index';
import { NgStringPipesModule } from './pipes/string/index';
import { NgMathPipesModule } from './pipes/math/index';
import { NgBooleanPipesModule } from './pipes/boolean/index';
import { NgDatePipesModule } from './pipes/date/index';

@NgModule({
  exports: [
    NgArrayPipesModule,
    NgStringPipesModule,
    NgMathPipesModule,
    NgBooleanPipesModule,
    NgObjectPipesModule,
    NgDatePipesModule,
  ],
})
export class NgPipesModule { }

export * from './pipes/array/index';
export * from './pipes/object/index';
export * from './pipes/string/index';
export * from './pipes/math/index';
export * from './pipes/boolean/index';
export * from './pipes/date/index';
