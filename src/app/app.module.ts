import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {PlayerService} from "./players/player.service";
import {PlayersComponent} from "./players/players.component";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import {environment} from "../environments/environment";
import {RacesComponent} from "./character/races/races.component";
import {RaceService} from "./character/races/race.service";
import {LoginComponent} from "./login/login.component";
import { RulesComponent } from './rules/rules.component';
import { LoreComponent } from './lore/lore.component';
import { CharacterComponent } from './character/character.component';
import {AngularFireAuth} from "angularfire2/auth/auth";
import {LoginService} from "./login/login.service";
import { ClassesComponent } from './character/classes/classes.component';

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
    PlayerDetailComponent,
    RacesComponent,
    LoginComponent,
    RulesComponent,
    LoreComponent,
    CharacterComponent,
    ClassesComponent
  ],
  providers: [
    PlayerService,
    RaceService,
    AngularFireAuth,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
