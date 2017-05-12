import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PlayerService} from "./players/player.service";
import {PlayersComponent} from "./players/players.component";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import {environment} from "../environments/environment";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'solusek-character-creator'),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
