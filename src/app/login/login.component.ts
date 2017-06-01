import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcheckService } from './../echeck.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieService: CookieService,
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
    this.cookieService.put('jwt', jwt);
    this.router.navigate(['/dashboard']);
  }
}
