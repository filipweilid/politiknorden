import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface TwitterApi {
    data: {
        statuses: any
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    data$: any;
    searchquery = 'Ulf Kristersson';
    tweetsdata;

    mainMenu = new BehaviorSubject<boolean>(true);
    tweetSidenav = new BehaviorSubject<boolean>(true);

    constructor(private http: ApiService, private http_: HttpClient) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        window.dispatchEvent(new Event('resize'));
    }

    toggleSidenav(sidenav: string) {
        if (sidenav === 'mainmenu') {
            let value = this.mainMenu.getValue();
            this.mainMenu.next(!value);
        }

        if (sidenav === 'tweets') {
            let value = this.tweetSidenav.getValue();
            this.tweetSidenav.next(!value);
        }
    }

    title = 'Politiknördarna';
}
