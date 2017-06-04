import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {PlayersComponent} from "./players/players.component";
import {LoginComponent} from "./login/login.component";
import {RulesComponent} from "./rules/rules.component";
import {LoreComponent} from "./lore/lore.component";
import {CharacterComponent} from "./character/character.component";
import {WarriorComponent} from "./character/classes/warrior/warrior.component";
import {PaladinComponent} from "./character/classes/paladin/paladin.component";
import {ReaverComponent} from "./character/classes/reaver/reaver.component";
import {ClericComponent} from "./character/classes/cleric/cleric.component";
import {ShamanComponent} from "./character/classes/shaman/shaman.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:name', component: PlayerDetailComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'lore', component: LoreComponent },
  { path: 'classes/warrior', component: WarriorComponent },
  { path: 'classes/paladin', component: PaladinComponent },
  { path: 'classes/reaver', component: ReaverComponent },
  { path: 'classes/cleric', component: ClericComponent },
  { path: 'classes/shaman', component: ShamanComponent }
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
