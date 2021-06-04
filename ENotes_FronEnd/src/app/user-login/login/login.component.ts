import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;

  constructor(public router: Router, public mediaObserver: MediaObserver,private formBuilder: FormBuilder, public userService: UserdataService, private snack: MatSnackBar, private cookieService: CookieService) {

    this.initLoginForm();
  }

  loginFormGroup: any;
  hide=true;

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  initLoginForm() {
    this.loginFormGroup = this.formBuilder.group(
      {
        username: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z_0-9]{3,15}")]),
        password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$")])

      }
    );
  }

  userLogin() {

    this.userService.getUserLoginData(this.loginFormGroup.value).subscribe(
      (res: any) => {
        this.cookieService.set('token', res.name);
        localStorage.setItem('Name', res.name);
        localStorage.setItem('userId', res.id);
        localStorage.setItem('username', res.username);
        localStorage.setItem('email', res.email);
        localStorage.setItem('mobile', res.mobile);
        this.router.navigate(['/notes/homepage']);
      },
      (error) => {
        this.loginFormGroup.reset();
        this.router.navigate(['/user-login/login']);
        this.snack.open("Incorrect Username or Password", 'OK', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
        
      }
    )


    // this.userService.userToken(this.user).subscribe(
    //   (res:any)=>{
    //     localStorage.setItem('token1',res.access_token);
    //     this.router.navigate(['/notes/homepage']);
    //   },
    //   (error)=>{
    //     this.router.navigate(['/user-login/login']);
    //     this.snack.open("Incorrect Username or Password",'OK',{
    //       duration:3000,
    //       verticalPosition:'top',
    //       horizontalPosition:'center'
    //   })
    // })



  }
}
