import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html'
})
export class DmComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (!user || user.uid !== 'Aq3nWHK9uJaVR8neIJdpGBpTMrg2') {
        this.router.navigate(['/']);
      }
    });
  }
}
