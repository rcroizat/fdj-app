import {Injectable} from '@angular/core';
import {Player} from './players.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Team {
  _id: string;
  name: string;
  thumbnail: string;
  players: Player[];
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private url = '/teams';

  constructor(
    private http: HttpClient) {
  }

  public getTeam(teamId: string): Observable<Team> {
    const url = `${this.url}/${teamId}`;
    return this.http.get<Team>(url);
  }

  public getPlayers(teamId: string): Observable<Player[]> {
    const url = `${this.url}/${teamId}/players`;
    return this.http.get<Player[]>(url);
  }
}
