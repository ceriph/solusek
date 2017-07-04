import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {LoginService} from "./login/login.service";
import * as firebase from "firebase/app";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,
              private loginService: LoginService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout().then(() => {
          this.router.navigate(['/']);
        });
  }
}
