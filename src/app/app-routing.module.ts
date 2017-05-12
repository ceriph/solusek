import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlayerDetailComponent} from "./players/player-detail.component";
import {PlayersComponent} from "./players/players.component";

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:name', component: PlayerDetailComponent }
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
