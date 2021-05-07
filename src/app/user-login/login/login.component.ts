import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public router: Router) {
  }

  error: any;
  loginUser = new UserdataService(this.router);

  userLogin(value: any) {
    this.error = this.loginUser.getUserLoginData(value);

  }

}
