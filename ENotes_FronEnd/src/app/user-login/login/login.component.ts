import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(public router: Router, public userService : UserdataService,private snack:MatSnackBar,private cookieService:CookieService) {
  }

  public user:any={
    email:'',
    password:'',
    
  };

  
  userLogin() 
  {
      this.userService.getUserLoginData(this.user).subscribe(
        (res:any)=>{
          this.cookieService.set('token',res.name);
          localStorage.setItem('userName', res.name);
          localStorage.setItem('userId', res.id);
          localStorage.setItem('email',res.email);
          localStorage.setItem('mobile',res.mobile);
          this.router.navigate(['/notes/homepage'])
          
        },
        (error)=>{
          this.router.navigate(['/user-login/login']);
          this.snack.open("Incorrect Username or Password",'OK',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'center'
          })
          
        }
      )
  }

}
