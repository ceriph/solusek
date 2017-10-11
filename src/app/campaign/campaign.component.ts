import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {CampaignService} from "./campaign.service";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaign: FirebaseObjectObservable<StoryElement>;

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaign = this.campaignService.get();
  }
}
