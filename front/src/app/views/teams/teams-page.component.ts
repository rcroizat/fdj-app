import {Component, OnInit} from '@angular/core';
import {League, LeaguesService} from '../../services/leagues.service';
import {Observable} from 'rxjs';
import {Team} from '../../services/teams.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  public leagues$: Observable<League[]>;
  public teams$: Observable<Team[]>;

  constructor(
    private leagueService: LeaguesService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.leagues$ = this.leagueService.getAll();
  }

  public leagueSelected(teamId: Team['_id']): void {
    this.teams$ = this.leagueService.getTeamsFromLeague(teamId);
  }

  public teamSelected({_id}: Team): void {
    this.router.navigate(['team', _id, 'players']);
  }

}
