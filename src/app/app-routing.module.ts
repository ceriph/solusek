import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {PlayersComponent} from "./players/players.component";
import {LoginComponent} from "./login/login.component";
import {RulesComponent} from "./rules/rules.component";
import {LoreComponent} from "./lore/lore.component";
import {CharacterComponent} from "./character/character.component";
import {DmComponent} from "./dm/dm.component";
import {RacesComponent} from "./character/races/races.component";
import {ClassesComponent} from "./character/classes/classes.component";
import {StatsComponent} from "./character/stats/stats.component";
import {InfoComponent} from "./character/info/info.component";
import {SummaryComponent} from "./character/summary/summary.component";
import {ClassComponent} from "./rules/class/class.component";
import {RaceComponent} from "./rules/race/race.component";
import {CampaignComponent} from "./campaign/campaign.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'character', component: CharacterComponent, children: [
    {path: 'races', component: RacesComponent},
    {path: 'classes', component: ClassesComponent},
    {path: 'stats', component: StatsComponent},
    {path: 'info', component: InfoComponent},
    {path: 'summary', component: SummaryComponent}
  ]
  },
  {path: 'players', component: PlayersComponent},
  {path: 'players/:name', component: PlayerDetailComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'rules/class', component: ClassComponent},
  {path: 'rules/race', component: RaceComponent},
  {path: 'lore', component: LoreComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'dm', component: DmComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
