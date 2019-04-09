import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyModule } from '@herodevs/lazy-af';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
