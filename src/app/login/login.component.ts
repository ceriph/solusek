import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  template: `
  <div> {{ (user | async)?.uid }} </div>
  <form>
    <input type="text" name="username" placeholder="email" [(ngModel)]="email">
    <input type="password" name="password" placeholder="password" [(ngModel)]="password">
    <button (click)="login()">Login</button>
    <p>{{error}}</p>
  </form>
  `,
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  error = "";

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private loginService: LoginService,
              private router: Router) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if(user && user.uid) {
        this.router.navigate(['/players']);
      }
    });
  }

  login() {
    this.loginService.login(this.email, this.password)
      .catch(response => this.error = response.message)
      .then(response => {
        this.user.subscribe(user => {
          if(user && user.uid) {
            this.router.navigate(['/players']);
          }
        });
      });
  }
}
