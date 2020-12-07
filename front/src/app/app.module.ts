import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchbarComponent} from './shared/searchbar/searchbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {TeamsListComponent} from './views/teams/teams-list.component';
import {TeamsPageComponent} from './views/teams/teams-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './services/interceptor.service';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TeamPlayersPageComponent} from './views/teams/team-players-page.component';
import { PlayerCardComponent } from './views/players/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    TeamsPageComponent,
    SearchbarComponent,
    TeamPlayersPageComponent,
    PlayerCardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers:
    [{provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
