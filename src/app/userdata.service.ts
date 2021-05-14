import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import baseUrl from './helper'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  router: any;
  constructor(router: Router,private snack:MatSnackBar,private http:HttpClient) {
    this.router = router;
  }
     
      email = "ashinde1760@gmail.com";
      password = "Akki@123";
      msg = "Incorrect username or password";
      msg1 = "Incorrect Email-id or Last Password";
      msg2 = "Password successfully changed ";
      msg3 = "Entered New password does not matched";
      msg4 = "Note created Successfully";
 

    //Function for Registration  
    getUserRegData(regFormUser: any) 
    {
        return this.http.post(`${baseUrl}/user/`,regFormUser);
    }


  // Function for Login
  getUserLoginData(loginData:any) :any{


    if ((this.email === loginData.email) && (this.password === loginData.password)) 
    {
      this.router.navigate(['/notes/homepage']);
    }
    else
    {
        this.router.navigate(['/user-login/login']);
        this.snack.open(this.msg,'OK',
        {
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'center',
        });
    }
  }


  //Function for Forget Password
  getForgetPassData(forgetPass: any): any 
  {
    if ((this.email === forgetPass.email) && (this.password === forgetPass.lpass))
    {
        if ((forgetPass.npass === forgetPass.cpass)) 
        {
            console.log("Password changed Successfully");
            Swal.fire('Done',this.msg2,'success');
            this.router.navigate(['/user-login/forgetPassword']);
        }
        else
        {
            return this.msg3;
        }
    }
    else 
    {
      this.router.navigate(['/user-login/forgetPassword']);
      return this.msg1;
    }
  }


  // function to Add a Note 
  addNewNote(newNote:any)
  {
    console.log(newNote);
    return this.http.post(`${baseUrl}/user/addNote`,newNote);
    
  }

}
