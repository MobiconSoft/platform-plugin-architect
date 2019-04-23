import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyModule } from '@herodevs/lazy-af';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, SafePipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
