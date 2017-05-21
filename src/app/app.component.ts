import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {LoginService} from "./login/login.service";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Solusek";

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private loginService: LoginService) {
    this.user = afAuth.authState;
  }

  logout() {
    this.loginService.logout()
  }
}
