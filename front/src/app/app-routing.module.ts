import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsPageComponent} from './views/teams/teams-page.component';
import {TeamPlayersPageComponent} from './views/teams/team-players-page.component';

const routes: Routes = [
  { path: '', component: TeamsPageComponent },
  { path: 'team/:teamId/players', component: TeamPlayersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
