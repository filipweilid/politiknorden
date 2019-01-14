import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-favorited',
    templateUrl: './favorited.component.html',
    styleUrls: ['./favorited.component.scss']
})
export class FavoritedComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['favorite', 'name', 'valkrets', 'status', 'party'];
    dataSource: MatTableDataSource<any>;
    favorites: any[] = this.storage.load('favorites');

    constructor(private storage: StorageService, private apiService: ApiService, private router: Router) { }

    ngOnInit() {
        this.router.navigateByUrl('bookmarked');
        this.apiService.storedFavorites.next(this.favorites ? this.favorites : []);
        this.apiService.storedFavorites.asObservable().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.sortingDataAccessor = (item, column) => {
                switch (column) {
                    case 'name':
                        return item['tilltalsnamn']

                    default:
                        return item[column]
                }
            }
            this.dataSource.sort = this.sort;
        })
    }

    toggleFavorite(member: any) {
        this.apiService.toggleFavorites(member);
    }

    getFavoriteStatus(member: any) {
        return this.apiService.storedFavorites.getValue().find(item => item.hangar_guid === member.hangar_guid) ? 'star' : 'star_border'
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    navigateToTweets(row) {
        this.router.navigateByUrl(`/bookmarked(tweets:${row.tilltalsnamn} ${row.efternamn})`);
    }
}
