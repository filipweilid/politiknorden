import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpService) { }

  getPartyWiki(title: string): Observable<any> {
    let options = {
      params: new HttpParams()
        .set('origin', '*')
        .set('format', 'json')
        .set('action', 'query')
        .set('prop', 'extracts')
        .set('titles', title)
    }
    return this.http.get('https://sv.wikipedia.org/w/api.php?exintro&explaintext&redirects=1', options).pipe(
      map(data => {
        let text = data['query']['pages']
        for (let item in text) {
          return text[item].extract
        }
      })
    )
  }
}