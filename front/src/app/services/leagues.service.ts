import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Team} from './teams.service';

export interface League {
  _id: string;
  name: string;
  sport: string;
  teams: Team[];
}
@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private url = '/leagues';
  constructor( private http: HttpClient) { }

  public getAll(): Observable<League[]> {
    return this.http.get<League[]>(this.url);
  }

  public getTeamsFromLeague(leagueId: string): Observable<Team[]> {
    const url = `${this.url}/${leagueId}/teams`;
    return this.http.get<Team[]>(url);
  }
}
