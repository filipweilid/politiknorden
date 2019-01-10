import { Component, OnInit, Input } from '@angular/core';
import { Parti } from '../parti';

@Component({
  selector: 'app-parti-detail',
  templateUrl: './parti-detail.component.html',
  styleUrls: ['./parti-detail.component.scss']
})
export class PartiDetailComponent implements OnInit {
  @Input() parti: Parti;
  
  constructor() { }

  ngOnInit() {
  }

}
