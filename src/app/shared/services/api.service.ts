import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Parti } from '../models/parti';
import { StorageService } from './storage.service';

export interface PersonApi {
    personlista: {
        person: any[]
    }
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    storedParties = new BehaviorSubject<{}>({});
    storedFavorites = new BehaviorSubject<any[]>([]);

    constructor(private http: HttpService, private storage: StorageService) { }

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

    toggleFavorites(member: any): Observable<any> {
        let members: any[] = this.storage.load('favorites') ? this.storage.load('favorites') : [];
        let currentMember = members.find(item => item.hangar_guid === member.hangar_guid);
        if (currentMember) {
            members.splice(members.indexOf(currentMember), 1);
        } else {
            members.push(member);
        }

        this.storage.save('favorites', members);

        this.storedFavorites.next(members);
        return this.storedFavorites.asObservable();
    }

    getPartyMembers(party: string): Observable<any> {
        let a = this.storedParties.getValue();

        if (a[party]) {
            return this.storedParties.asObservable().pipe(
                map(list => list[party].personlista.person)
            )
        }

        let options = {
            params: new HttpParams()
                .set('parti', party)
        }
        return this.http.get<PersonApi>('http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&valkrets=&rdlstatus=&org=&utformat=json&termlista=', options).pipe(
            map(data => {
                a[party] = data;
                this.storedParties.next(a);
                return data.personlista.person
            })
        )
    }
}