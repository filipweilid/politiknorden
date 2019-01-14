import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-read-more',
    templateUrl: './read-more.component.html',
    styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit, OnChanges {
    @Input() data: string;
    maxWords: number = 10;
    truncatedData: string;
    readMore = true;
    constructor() { }

    ngOnInit() {
        console.log(this.data)
        //this.trimmedString = this.data.substr(0, this.maxWords);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.data) {
            this.truncatedData = this.data.split(" ").splice(0, 6).join(" ");
        }
    }

    toggleReadmore() {
        this.readMore = !this.readMore;
    }

}
