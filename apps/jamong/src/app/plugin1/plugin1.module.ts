import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plugin1Component } from './plugin1.component';

@NgModule({
  declarations: [Plugin1Component],
  imports: [
    CommonModule
  ],
  bootstrap: [Plugin1Component]
})
export class Plugin1Module { }
