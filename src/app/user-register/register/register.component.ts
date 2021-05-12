import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  ngOnInit(): void{
  }


  //https://github.com/shivrajgodle/cowinClone.git

  
  public userReg:any={
    name: '',
    email:'',
    password:'',
  };

  constructor(public router: Router, public userService:UserdataService) { };

  //taking data from html to here and send to reg.ts file
  userRegister()
  {
    console.log(this.userReg);
    this.userService.getUserRegData(this.userReg).subscribe(

      (done)=>{
        Swal.fire('Done','Regestered successfully','success');
      },
      (error)=>{
        alert("User already exist");
        this.router.navigate(['/user-register/register']);
      }
    );
  }
}
