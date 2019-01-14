import { Component, OnInit, ElementRef } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgxLinkifyOptions } from 'ngx-linkifyjs';

const options: NgxLinkifyOptions =
{
    attributes: {
        target: '_blank'
    },
    className: 'linkified',
    defaultProtocol: 'http',
    events: null,
    format: function (value, type) {
        return value;
    },
    formatHref: function (href, type) {
        if (type === 'mention') {
            href = `https://twitter.com${href}`;
        }
        return href;
    },
    ignoreTags: [],
    nl2br: false,
    tagName: 'a',
    target: {
        url: '_blank',
    },
    validate: true,
};

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
    searchquery = '';
    tweetsdata: any;
    options = options;
    loading = false;

    constructor(private http: ApiService, private http_: HttpClient, private route: ActivatedRoute, private element: ElementRef) {

    }

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
        this.loading = true;
        var headers = new HttpHeaders();
        var params = new HttpParams().set('query', query);

        var searchterm = 'query=' + this.searchquery;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http_.post<TwitterApi>('http://localhost:3000/search', searchterm, { headers: headers, params: params }).subscribe((res) => {
            this.tweetsdata = res.data.statuses;
            console.log(this.tweetsdata);
        }, (err) => console.log(err), () => this.loading = false);
    }

}
