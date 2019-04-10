import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { Plugin2Component } from './plugin2/plugin2.component';

@NgModule({
  declarations: [Plugin2Component],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    Plugin2Component
  ],
  entryComponents: [
    Plugin2Component
  ]
})
export class Plugin2Module {}
