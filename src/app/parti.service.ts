import { Injectable } from '@angular/core';
import { Parti } from './parti';
import { PARTIER } from './mock-partier';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PartiService {

  constructor(private messageService: MessageService) { }


getPartier(): Observable<Parti[]> {
  this.messageService.add('PartiService: fetched partier');
  return of(PARTIER);
}

}