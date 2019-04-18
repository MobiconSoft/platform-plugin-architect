import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { Plugin2Component } from './plugin2/plugin2.component';
import { Plugin2Service } from './plugin2.service';

@NgModule({
  declarations: [Plugin2Component],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    Plugin2Component
  ],
  providers: [Plugin2Service],
  bootstrap: [Plugin2Component]
})
export class Plugin2Module {
  constructor(private injector: Injector){}
}
