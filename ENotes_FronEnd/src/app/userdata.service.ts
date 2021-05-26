import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import baseUrl from './helper'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private snack:MatSnackBar,private http:HttpClient,public router:Router,private cookie:CookieService){  }

    //Function for Registration  
    getUserRegData(regFormUser: any) 
    {
        return this.http.post(`${baseUrl}/user/`,regFormUser);
    }



  // function to Add a Note 
  addNewNote(newNote:any)
  {
    return this.http.post(`${baseUrl}/user/addNote`,newNote);
  }

  //Function to login perticular user
  getUserLoginData(loginData:any)
  {
    return this.http.post(`${baseUrl}/user/login`,loginData);
  }

  //Function to show notes
  showNotes(uid:any)
  {
    return this.http.get(`${baseUrl}/user/showNotes/${uid}`);
  }

  //Function to delete notes
  deleteNote(noteId:any)
  {
    return this.http.delete(`${baseUrl}/user/deleteNote/${noteId}`);
  }

  //funtion to edit note
  editNote(note:any,id:any)
  {
    return this.http.put(`${baseUrl}/user/editNote/${id}`,note);
  }



 // Function for Forget Password

  getForgetPassData(forgetPass: any): any 
  {
    if (("ashinde1760@gmail.com" === forgetPass.email) && ("Akki@123" === forgetPass.lpass))
    {
        if ((forgetPass.npass === forgetPass.cpass)) 
        {
            console.log("Password changed Successfully");
            Swal.fire('Done',"Password successfully changed",'success');
            this.router.navigate(['/user-login/forgetPassword']);
        }
        else
        {
            return "Entered New password does not matched";
        }
    }
    else 
    {
      this.router.navigate(['/user-login/forgetPassword']);
      return "Incorrect Email-id or Last Password";
    }
  }



//====================Authguard========================

loggedIn()
{
  return !!this.cookie.get('token');
}

//=================Interceptor================

getToken()
{
  return this.cookie.get('token');
}




}
