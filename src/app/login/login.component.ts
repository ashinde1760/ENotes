import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

ngOnInit(): void {
  }

  constructor(public router: Router) {
    this.loginObj = {};
  }

  error: any;
  loginObj: any;
  loginUser = new Login(this.router);

    userLogin(value: any) {
    this.loginObj = value;
    this.error=this.loginUser.getData(this.loginObj);

  }

}
