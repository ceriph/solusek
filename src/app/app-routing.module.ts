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
import {HumanComponent} from "./character/races/human/human.component";
import {HighelfComponent} from "./character/races/highelf/highelf.component";
import {WoodelfComponent} from "./character/races/woodelf/woodelf.component";
import {DarkelfComponent} from "./character/races/darkelf/darkelf.component";
import {HalflingComponent} from "./character/races/halfling/halfling.component";
import {DwarfComponent} from "./character/races/dwarf/dwarf.component";
import {OgreComponent} from "./character/races/ogre/ogre.component";
import {TrollComponent} from "./character/races/troll/troll.component";
import {IksarComponent} from "./character/races/iksar/iksar.component";
import {MonkComponent} from "./character/classes/monk/monk.component";
import {BardComponent} from "./character/classes/bard/bard.component";
import {RangerComponent} from "./character/classes/ranger/ranger.component";
import {RogueComponent} from "./character/classes/rogue/rogue.component";
import {EnchanterComponent} from "./character/classes/enchanter/enchanter.component";
import {NecromancerComponent} from "./character/classes/necromancer/necromancer.component";
import {WizardComponent} from "./character/classes/wizard/wizard.component";
import {DmComponent} from "./dm/dm.component";
import {RacesComponent} from "./character/races/races.component";
import {ClassesComponent} from "./character/classes/classes.component";
import {StatsComponent} from "./character/stats/stats.component";
import {InfoComponent} from "./character/info/info.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'character', component: CharacterComponent, children: [
    {path: 'races', component: RacesComponent},
    {path: 'classes', component: ClassesComponent},
    {path: 'stats', component: StatsComponent},
    {path: 'info', component: InfoComponent}
  ]
  },
  {path: 'players', component: PlayersComponent},
  {path: 'players/:name', component: PlayerDetailComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'lore', component: LoreComponent},
  {path: 'races/human', component: HumanComponent},
  {path: 'races/highelf', component: HighelfComponent},
  {path: 'races/woodelf', component: WoodelfComponent},
  {path: 'races/darkelf', component: DarkelfComponent},
  {path: 'races/dwarf', component: DwarfComponent},
  {path: 'races/halfling', component: HalflingComponent},
  {path: 'races/ogre', component: OgreComponent},
  {path: 'races/troll', component: TrollComponent},
  {path: 'races/iksar', component: IksarComponent},
  {path: 'classes/warrior', component: WarriorComponent},
  {path: 'classes/paladin', component: PaladinComponent},
  {path: 'classes/reaver', component: ReaverComponent},
  {path: 'classes/cleric', component: ClericComponent},
  {path: 'classes/shaman', component: ShamanComponent},
  {path: 'classes/monk', component: MonkComponent},
  {path: 'classes/bard', component: BardComponent},
  {path: 'classes/ranger', component: RangerComponent},
  {path: 'classes/rogue', component: RogueComponent},
  {path: 'classes/wizard', component: WizardComponent},
  {path: 'classes/enchanter', component: EnchanterComponent},
  {path: 'classes/necromancer', component: NecromancerComponent},
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
