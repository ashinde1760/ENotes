import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public router: Router,public userService:UserdataService,private snack:MatSnackBar) { }
  error: string="";
  ngOnInit(): void { }

  public forgetPass:any={
    email:'',
    lpass:'',
    npass:'',
    cpass:'',
  }


  forgetPassword() {
    
    this.error = this.userService.getForgetPassData(this.forgetPass);
    this.snack.open(this.error,'OK',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'center',
    })
  }
}
