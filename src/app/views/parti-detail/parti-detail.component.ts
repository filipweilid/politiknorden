import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Parti } from '../../shared/models/parti';
import { PARTIER } from '../../shared/models/mock-partier'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-parti-detail',
    templateUrl: './parti-detail.component.html',
    styleUrls: ['./parti-detail.component.scss']
})
export class PartiDetailComponent implements AfterViewInit {
    @Input() parti: Parti;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['favorite', 'name', 'valkrets', 'status'];
    dataSource: MatTableDataSource<any>;
    partier: Parti[] = PARTIER;
    persons$: any;
    favorites$: any;

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.route.params.subscribe(params => {
                this.parti = this.partier.find(parti => parti.id.toString() === params.id);

                this.apiService.getPartyMembers(params.id).subscribe(data => {

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
            })
        }, 0);

        this.favorites$ = this.apiService.storedFavorites.asObservable();
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

}
