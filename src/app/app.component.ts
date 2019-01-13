import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
    data$: any;
    searchquery = 'Ulf Kristersson';
    tweetsdata;

    constructor(private http: ApiService, private http_: HttpClient) { }

    ngOnInit() {
        this.searchcall();
    }

    makecall() {
        var headers = new HttpHeaders();

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http_.post('http://localhost:3000/authorize', { headers: headers }).subscribe((res) => {
            console.log(res);
        })
    }

    searchcall() {
        var headers = new HttpHeaders();
        var params = new HttpParams().set('query', this.searchquery);

        var searchterm = 'query=' + this.searchquery;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http_.post<TwitterApi>('http://localhost:3000/search', searchterm, { headers: headers, params: params }).subscribe((res) => {
            this.tweetsdata = res.data.statuses;
            console.log(this.tweetsdata);
        });
    }

    title = 'Politiknördarna';
}
