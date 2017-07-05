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
import {RulesComponent} from "./rules/rules.component";
import {LoreComponent} from "./lore/lore.component";
import {CharacterComponent} from "./character/character.component";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {LoginService} from "./login/login.service";
import {ClassesComponent} from "./character/classes/classes.component";
import {DmComponent} from "./dm/dm.component";
import {StatsComponent} from "./character/stats/stats.component";
import {InfoComponent} from "./character/info/info.component";
import {KeysPipe} from "./keys-pipe";
import {ClassService} from "./character/classes/classes.service";
import {StatService} from "./character/stats/stat.service";
import {SummaryComponent} from "./character/summary/summary.component";
import {CharacterService} from "./character/character.service";
import {EquipmentService} from "./character/equipment.service";
import {ClassComponent} from "./rules/class/class.component";
import {RaceComponent} from "./rules/race/race.component";
import { CampaignComponent } from './campaign/campaign.component';
import {ScenarioService} from "./campaign/scenario.service";
import {RulesService} from "./rules/rules.service";
import {Ng2SimplePageScrollModule} from "ng2-simple-page-scroll";
import {SpellService} from "./rules/spells/spell.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'solusek-character-creator'),
    AngularFireDatabaseModule,
    Ng2SimplePageScrollModule.forRoot()
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
    ClassesComponent,
    ClassComponent,
    DmComponent,
    StatsComponent,
    InfoComponent,
    KeysPipe,
    SummaryComponent,
    ClassComponent,
    RaceComponent,
    CampaignComponent
  ],
  providers: [
    PlayerService,
    RaceService,
    ClassService,
    StatService,
    CharacterService,
    EquipmentService,
    ScenarioService,
    RulesService,
    SpellService,
    AngularFireAuth,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
