import { Component, OnInit } from '@angular/core';
import {FeatService} from "./feat.service";
import {FirebaseListObservable} from "angularfire2/database";
import {Feat} from "./feat";

@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrls: ['./feats.component.css']
})
export class FeatsComponent implements OnInit {

  feats: FirebaseListObservable<Feat[]>

  constructor(private featService: FeatService) { }

  ngOnInit() {
    this.feats = this.featService.list();
  }
}
