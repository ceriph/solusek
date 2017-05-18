import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {PlayersComponent} from "./players/players.component";
import {RacesComponent} from "./character/races/races.component";
import {LoginComponent} from "./login/login.component";
import {RulesComponent} from "./rules/rules.component";
import {LoreComponent} from "./lore/lore.component";
import {CharacterComponent} from "./character/character.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:name', component: PlayerDetailComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'lore', component: LoreComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
