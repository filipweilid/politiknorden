import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$: any;

  constructor(private http: ApiService) { }

  ngOnInit() {
    this.data$ = this.http.getPartyWiki('Moderaterna');
  }

  title = 'Politiknördarna';
}
