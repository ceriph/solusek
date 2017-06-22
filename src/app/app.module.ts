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
import {WarriorComponent} from "./character/classes/warrior/warrior.component";
import {PaladinComponent} from "./character/classes/paladin/paladin.component";
import {ReaverComponent} from "./character/classes/reaver/reaver.component";
import {ClericComponent} from "./character/classes/cleric/cleric.component";
import {ShamanComponent} from "./character/classes/shaman/shaman.component";
import {MonkComponent} from "./character/classes/monk/monk.component";
import {RogueComponent} from "./character/classes/rogue/rogue.component";
import {BardComponent} from "./character/classes/bard/bard.component";
import {RangerComponent} from "./character/classes/ranger/ranger.component";
import {WizardComponent} from "./character/classes/wizard/wizard.component";
import {EnchanterComponent} from "./character/classes/enchanter/enchanter.component";
import {NecromancerComponent} from "./character/classes/necromancer/necromancer.component";
import {HumanComponent} from "./character/races/human/human.component";
import {HighelfComponent} from "./character/races/highelf/highelf.component";
import {WoodelfComponent} from "./character/races/woodelf/woodelf.component";
import {DarkelfComponent} from "./character/races/darkelf/darkelf.component";
import {DwarfComponent} from "./character/races/dwarf/dwarf.component";
import {HalflingComponent} from "./character/races/halfling/halfling.component";
import {OgreComponent} from "./character/races/ogre/ogre.component";
import {TrollComponent} from "./character/races/troll/troll.component";
import {IksarComponent} from "./character/races/iksar/iksar.component";
import {DmComponent} from "./dm/dm.component";
import { StatsComponent } from './character/stats/stats.component';
import { InfoComponent } from './character/info/info.component';
import {KeysPipe} from "./keys-pipe";
import {ClassService} from "./character/classes/classes.service";
import {StatService} from "./character/stats/stat.service";
import { SummaryComponent } from './character/summary/summary.component';
import {CharacterService} from "./character/character.service";
import {EquipmentService} from "./character/equipment.service";

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
    ClassesComponent,
    WarriorComponent,
    PaladinComponent,
    ReaverComponent,
    ClericComponent,
    ShamanComponent,
    MonkComponent,
    RogueComponent,
    BardComponent,
    RangerComponent,
    WizardComponent,
    EnchanterComponent,
    NecromancerComponent,
    HumanComponent,
    HighelfComponent,
    WoodelfComponent,
    DarkelfComponent,
    DwarfComponent,
    HalflingComponent,
    OgreComponent,
    TrollComponent,
    IksarComponent,
    DmComponent,
    StatsComponent,
    InfoComponent,
    KeysPipe,
    SummaryComponent
  ],
  providers: [
    PlayerService,
    RaceService,
    ClassService,
    StatService,
    CharacterService,
    EquipmentService,
    AngularFireAuth,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
