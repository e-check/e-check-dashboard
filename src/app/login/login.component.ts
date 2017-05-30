import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSessionService } from './../app-session.service';
import { EcheckService } from './../echeck.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private appSessionService: AppSessionService,
    private echeckService: EcheckService
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.echeckService
      .logIn(email, password)
      .then(this.loginSuccess.bind(this))
      .catch(ex => alert('邮箱或密码错误'));
  }

  loginSuccess(jwt) {
    this.appSessionService.jwt = jwt;
    this.router.navigate(['/dashboard']);
  }
}
