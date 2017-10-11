import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {Scenario} from "./scenario";

@Injectable()
export class CampaignService {

  path = 'campaign';

  constructor(private db: AngularFireDatabase) {}

  get(): FirebaseObjectObservable<StoryElement> {
    return this.db.object(this.path);
  }
}
