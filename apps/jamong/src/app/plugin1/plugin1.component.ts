import { Component } from '@angular/core';
import { Message } from '@jm/api-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jm-plugin1',
  templateUrl: './plugin1.component.html',
  styleUrls: ['./plugin1.component.scss']
})
export class Plugin1Component {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) { }
}
