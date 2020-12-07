import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {forkJoin} from 'rxjs';
import {Player} from '../../services/players.service';
import {switchMap} from 'rxjs/operators';
import {TeamsService} from '../../services/teams.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-team-players-page',
  templateUrl: './team-players-page.component.html',
  styleUrls: ['./team-players-page.component.scss']
})
export class TeamPlayersPageComponent implements OnInit {
  public players: Player[];
  public teamName: string;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(({params: {teamId}}: Params) =>
          forkJoin({
            team: this.teamsService.getTeam(teamId),
            players: this.teamsService.getPlayers(teamId)
          })
        )
      ).subscribe(({team: {name}, players}) => {
      this.teamName = name;
      this.players = players;
    });
  }

  public goBack(): void {
    this.location.back();
  }

}
