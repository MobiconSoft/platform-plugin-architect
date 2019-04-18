import { Component, ViewChild, ViewContainerRef, NgModuleFactory, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { DynamicAFService } from '@herodevs/dynamic-af';

import * as common from '@angular/common';
import * as commonHttp from '@angular/common/http';
import * as core from '@angular/core';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as ngxEcharts from 'ngx-echarts';
import { DynamicLoaderService } from './dynamic-loader.service';

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('Plugin', {read: ViewContainerRef}) pluginVcr: ViewContainerRef;
  plugin1Path: string;
  loadedPlugins: any = {};

  constructor(
    private http: HttpClient,
    private injector: Injector,
    private lazyService: DynamicLoaderService
  ) { }

  loadPlugin() {
    this.plugin1Path = 'apps/jamong/src/app/plugin1/plugin1.module#Plugin1Module';
  }

  loadPlugin2() {
    const moduleFactory = this.loadedPlugins['api/plugin2'];
    if (!moduleFactory) {
      this.loadRemoteComponent();
    } else {
      this.lazyService.createAndAttachModuleAsync(moduleFactory, this.injector, { vcr: this.pluginVcr });
    }
  }

  private loadRemoteComponent() {
    let moduleFactory: NgModuleFactory<any>;
    this.http.get('api/plugin2', { responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      ).subscribe((compiledSource: any) => {
        const exports = {};
        const modules = {
          '@angular/core': core,
          '@angular/common': common,
          '@angular/common/http': commonHttp,
          '@angular/router': router,
          'rxjs': rxjs,
          'rxjs/operators': rxjsOperators,
          'ngx-echarts': ngxEcharts
        };
        const require: any = (module) => modules[module];
        // tslint:disable-next-line: no-eval
        eval(compiledSource);
        moduleFactory = exports['Plugin2ModuleNgFactory'];
        this.loadedPlugins['api/plugin2'] = moduleFactory;
        this.lazyService.createAndAttachModuleAsync(moduleFactory, this.injector, { vcr: this.pluginVcr});
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(error);
  }
}
