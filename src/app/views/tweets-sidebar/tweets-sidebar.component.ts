import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface TwitterApi {
    data: {
        statuses: any
    }
}

@Component({
    selector: 'app-tweets-sidebar',
    templateUrl: './tweets-sidebar.component.html',
    styleUrls: ['./tweets-sidebar.component.scss']
})
export class TweetsSidebarComponent implements OnInit {
    data$: any;
    searchquery = 'Ulf Kristersson';
    tweetsdata;

    constructor(private http: ApiService, private http_: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.searchcall(params.tweet);
        })
        window.dispatchEvent(new Event('resize'));
    }

    makecall() {
        var headers = new HttpHeaders();

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http_.post('http://localhost:3000/authorize', { headers: headers }).subscribe((res) => {
            console.log(res);
        })
    }

    searchcall(query) {
        var headers = new HttpHeaders();
        var params = new HttpParams().set('query', query);

        var searchterm = 'query=' + this.searchquery;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http_.post<TwitterApi>('http://localhost:3000/search', searchterm, { headers: headers, params: params }).subscribe((res) => {
            this.tweetsdata = res.data.statuses;
            console.log(this.tweetsdata);
        });
    }

}
