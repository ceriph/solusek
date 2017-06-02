import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
        this.router.navigate(['/character']);
      }
    });
  }

  login() {
    this.loginService.login(this.email, this.password)
      .catch(response => this.error = response.message)
      .then(() => {
        this.user.subscribe(user => {
          if(user && user.uid) {
            this.router.navigate(['/players']);
          }
        });
      });
  }
}
