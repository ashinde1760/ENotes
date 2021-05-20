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

     uname='';
      
    //Function for Registration  
    getUserRegData(regFormUser: any) 
    {
        return this.http.post(`${baseUrl}/user/`,regFormUser);
    }


  // Function for Login
    // getUserLoginData(loginData:any) 
    // {

    //     console.log(loginData);
    //     console.log(loginData);
    //     console.log(loginData);
    //     return this.http.post(`${baseUrl}/user/login`,loginData);
    // }

    // this.uname=loginData.email;
    // if (( "ashinde1760@gmail.com" === loginData.email) && ("Akki@123" === loginData.password)) 
    // {
    //   this.router.navigate(['/notes/homepage']);
    // }
    // else
    // {
    //     this.router.navigate(['/user-login/login']);
    //     this.snack.open("Incorrect username or password",'OK',
    //     {
    //         duration:3000,
    //         verticalPosition:'top',
    //         horizontalPosition:'center',
    //     });
    // }

    


  //Function for Forget Password
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


  // function to Add a Note 
  addNewNote(newNote:any)
  {
    console.log(newNote);
    return this.http.post(`${baseUrl}/user/addNote`,newNote);
    
  }

  //Function to login perticular user
  getUserLoginData(loginData:any)
  {
    console.log(loginData);
    return this.http.post(`${baseUrl}/user/login`,loginData);
    
  }

  //Function to show notes
  showNotes(uid:any)
  {
    console.log(uid);
    return this.http.get(`${baseUrl}/user/showNotes/${uid}`);
  }

  //Function to delete notes
  deleteNote1(noteId:any)
  {
    return this.http.delete(`${baseUrl}/user/deleteNote/${noteId}`);
  }

  //funtion to edit note
  editNote(note:any,id:any)
  {
    console.log(note);
    
    return this.http.post(`${baseUrl}/user/editNote/${id}`,note);
  }
}
