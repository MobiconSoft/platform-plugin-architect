import { Component, OnInit } from '@angular/core';
import { Plugin2Service } from '../plugin2.service';

@Component({
  selector: 'jm-plugin2',
  templateUrl: './plugin2.component.html',
  styleUrls: ['./plugin2.component.scss']
})
export class Plugin2Component implements OnInit {

  options: any;

  constructor(private plugin2Service: Plugin2Service) {}

  ngOnInit() {
    this.options = this.plugin2Service.getChartConfig();
  }
}
