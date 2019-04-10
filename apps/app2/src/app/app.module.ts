import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Plugin2Module } from '@jm/plugin2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Plugin2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
