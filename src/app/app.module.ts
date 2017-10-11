import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import {environment} from "../environments/environment";
import {CharacterRaceComponent} from "./character/race/character-race.component";
import {RaceService} from "./rules/races/race.service";
import {LoginComponent} from "./login/login.component";
import {RulesComponent} from "./rules/rules.component";
import {LoreComponent} from "./lore/lore.component";
import {CharacterComponent} from "./character/character.component";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {LoginService} from "./login/login.service";
import {CharacterClassComponent} from "./character/class/character-class.component";
import {DmComponent} from "./dm/dm.component";
import {CharacterStatsComponent} from "./character/stats/character-stats.component";
import {CharacterInfoComponent} from "./character/info/character-info.component";
import {KeysPipe} from "./keys-pipe";
import {ClassService} from "./rules/classes/classes.service";
import {StatService} from "./character/stats/stat.service";
import {CharacterSummaryComponent} from "./character/summary/character-summary.component";
import {CharacterService} from "./character/character.service";
import {EquipmentService} from "./rules/equipment/equipment.service";
import {ClassComponent} from "./rules/classes/class.component";
import {RacesComponent} from "./rules/races/race.component";
import {CampaignComponent} from "./campaign/campaign.component";
import {ScenarioService} from "./campaign/scenario.service";
import {RulesService} from "./rules/rules.service";
import {SpellService} from "./rules/spells/spell.service";
import {PoisonService} from "./rules/poisons/poison.service";
import {CustomScroll} from "./scroll/scroll.directive";
import {SkillService} from "./rules/skills/skill.service";
import {PlayerService} from "./players/player.service";
import {SummaryStatComponent} from './character/summary/summary-stat/summary-stat.component';
import {SkillCardComponent} from "./rules/skills/skill-card.component";
import {SummaryCheckComponent} from './character/summary/summary-check/summary-check.component';
import { SummaryEquipmentComponent } from './character/summary/summary-equipment/summary-equipment.component';
import { ItemCardComponent } from './rules/equipment/item-card/item-card.component';
import { SummarySpellsComponent } from './character/summary/summary-spells/summary-spells.component';
import { SpellCardComponent } from './rules/spells/spell-card/spell-card.component';
import {SpellGroupService} from "./rules/spells/spell-group.service";
import {SpellSlotService} from "./rules/spells/spell-slot.service";
import { SpellBookComponent } from './rules/spells/spell-book/spell-book.component';
import { EquipmentComponent } from './rules/equipment/equipment.component';
import { StoryElementComponent } from './campaign/story-element/story-element.component';
import {CampaignService} from "./campaign/campaign.service";
import { FeatsComponent } from './rules/feats/feats.component';

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
    CharacterRaceComponent,
    LoginComponent,
    RulesComponent,
    LoreComponent,
    CharacterComponent,
    CharacterClassComponent,
    ClassComponent,
    DmComponent,
    CharacterStatsComponent,
    CharacterInfoComponent,
    KeysPipe,
    CharacterSummaryComponent,
    ClassComponent,
    RacesComponent,
    CampaignComponent,
    CustomScroll,
    SkillCardComponent,
    SummaryStatComponent,
    SummaryCheckComponent,
    SummaryEquipmentComponent,
    ItemCardComponent,
    SummarySpellsComponent,
    SpellCardComponent,
    SpellBookComponent,
    EquipmentComponent,
    StoryElementComponent,
    FeatsComponent
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
    SpellGroupService,
    SpellSlotService,
    SkillService,
    PoisonService,
    AngularFireAuth,
    CampaignService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
