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
    localStorage.clear();
  }

  constructor(public router: Router, public userService : UserdataService,private snack:MatSnackBar,) {
  }

  public user:any={
    email:'',
    password:'',
    
  };

  
  userLogin() 
  {
      this.userService.getUserLoginData(this.user).subscribe(
        (res:any)=>{
          localStorage.setItem('userName', res.name);
          localStorage.setItem('userId', res.id);
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
