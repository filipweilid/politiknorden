import { Component, OnInit } from '@angular/core';
import { Parti } from '../shared/models/parti';
import { PartiService } from '../shared/services/parti.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-partier',
    templateUrl: './partier.component.html',
    styleUrls: ['./partier.component.scss']
})
export class PartierComponent implements OnInit {
    selectedParti: Parti;
    partier: Parti[];
    onSelect(parti: Parti): void {
        this.selectedParti = parti;
    }


    constructor(private partiService: PartiService, private router: Router) { }

    getPartier(): void {
        this.partiService.getPartier()
            .subscribe(partier => this.partier = partier);
    }
    ngOnInit() {
        this.getPartier()
    }

    gotoLink(parti: Parti) {
        this.router.navigateByUrl(`/party/${parti.id}(tweets:${parti.name})`);
    }

}
