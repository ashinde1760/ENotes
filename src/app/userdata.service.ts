import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  router: any;
  constructor(router: Router) {
    this.router = router;
  }
  blank = "";
      email = "ashinde1760@gmail.com";
      password = "Akki@123";
      msg = "Incorrect username or password";
      msg1 = "Incorrect Email-id or last Password";
      msg2 = "Password changed successfully";
  msg3 = "Entered New password does not matched";
  getUserRegData(regFormUser: any) {
    console.log(regFormUser);
  }

  getUserLoginData(loginData:any) :any{


    if ((this.email === loginData.email) && (this.password === loginData.password)) {
      this.router.navigate(['/user-login/homepage']);
    }
    else {
      this.router.navigate(['/user-login/login']);
      return this.msg;
          }
  }

  getForgetPassData(forgetPass: any): any {
    
    if ((this.email === forgetPass.email) && (this.password === forgetPass.password))
    {
      this.router.navigate(['/user-login/forgetPassword']);
      if ((forgetPass.nPassword === forgetPass.cPassword)) {
        console.log("Password chaned Successfully");
        return this.msg2;
      }
      else {
        return this.msg3;
      }
      
    }
    else {
      this.router.navigate(['/user-login/forgetPassword']);
      return this.msg1;
    }
  }

}
