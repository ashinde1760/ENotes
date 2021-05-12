import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public router: Router, public userService : UserdataService,private snack:MatSnackBar) {
  }

  public user:any={
    email:'',
    password:'',
  };

  error: any;

  userLogin() {
    this.userService.getUserLoginData(this.user);
      }

}
