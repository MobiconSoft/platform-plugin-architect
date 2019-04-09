import { Component } from '@angular/core';

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  plugin1Path: string;

  loadPlugin() {
    this.plugin1Path = 'apps/jamong/src/app/plugin1/plugin1.module#Plugin1Module';
  }
}
