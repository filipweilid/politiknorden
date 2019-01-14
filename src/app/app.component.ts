import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface TwitterApi {
    data: {
        statuses: any
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    data$: any;
    searchquery = 'Ulf Kristersson';
    tweetsdata;

    constructor(private http: ApiService, private http_: HttpClient) { }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

    title = 'Politiknördarna';
}
