import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RulesComponent} from "./rules/rules.component";
import {LoreComponent} from "./lore/lore.component";
import {CharacterComponent} from "./character/character.component";
import {DmComponent} from "./dm/dm.component";
import {CharacterRaceComponent} from "./character/race/character-race.component";
import {CharacterClassComponent} from "./character/class/character-class.component";
import {CharacterStatsComponent} from "./character/stats/character-stats.component";
import {CharacterInfoComponent} from "./character/info/character-info.component";
import {CharacterSummaryComponent} from "./character/summary/character-summary.component";
import {ClassComponent} from "./rules/class/class.component";
import {RaceComponent} from "./rules/race/race.component";
import {CampaignComponent} from "./campaign/campaign.component";
import {SpellBookComponent} from "./rules/spells/spell-book/spell-book.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'character', component: CharacterComponent, children: [
    {path: 'races', component: CharacterRaceComponent},
    {path: 'classes', component: CharacterClassComponent},
    {path: 'stats', component: CharacterStatsComponent},
    {path: 'info', component: CharacterInfoComponent},
    {path: 'summary', component: CharacterSummaryComponent}
  ]
  },
  {path: 'rules', component: RulesComponent},
  {path: 'rules/class/:name', component: ClassComponent},
  {path: 'rules/race/:name', component: RaceComponent},
  {path: 'rules/spell-book/:name', component: SpellBookComponent},
  {path: 'lore', component: LoreComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'dm', component: DmComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
