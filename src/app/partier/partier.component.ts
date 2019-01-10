import { Component, OnInit } from '@angular/core';
import { Parti } from '../parti';
import { PartiService } from '../parti.service';

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


constructor(private partiService: PartiService) { }

getPartier(): void {
  this.partiService.getPartier()
      .subscribe(partier => this.partier = partier);
}
ngOnInit() {
  this.getPartier()
}

}
