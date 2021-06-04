import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private snack:MatSnackBar,private http:HttpClient,public router:Router,private cookie:CookieService){  }

    //Function for Registration  
    getUserRegData(regFormUser: any) 
    {
        console.log(regFormUser);
        
        return this.http.post(`${environment.baseUrl}/user/`,regFormUser);
    }



  // function to Add a Note 
  addNewNote(newNote:any)
  {
    return this.http.post(`${environment.baseUrl}/user/addNote`,newNote);
  }

  //Function to login perticular user
  getUserLoginData(loginData:any)
  {
    return this.http.post(`${environment.baseUrl}/user/login`,loginData);
  }

  //Function to show notes
  showNotes(uid:any)
  {
    return this.http.get(`${environment.baseUrl}/user/showNotes/${uid}`);
  }

  //Function to delete notes
  deleteNote(noteId:any)
  {
    return this.http.delete(`${environment.baseUrl}/user/deleteNote/${noteId}`);
  }

  //funtion to edit note
  editNote(note:any,id:any)
  {
    return this.http.put(`${environment.baseUrl}/user/editNote/${id}`,note);
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


contactForm(data:any)
{
  return this.http.post(`${environment.baseUrl}/user/contact_us/`,data);  
}

// showNoteDetails(id:any)
// {
//   return this.http.get(`${environment.baseUrl}/user/showNotes/${id}`);
// }


// userToken(loginData:any)
// {
//   var data="username="+loginData.username+"&password="+loginData.password+"&grant_type=password";
//   var reqHeader=new HttpHeaders({'Content-type':'application/x-www-urlencoded'});
//   return this.http.post(baseUrl+'/token',data,{headers:reqHeader});
// }

}
