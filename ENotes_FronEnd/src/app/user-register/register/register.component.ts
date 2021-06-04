import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  mediaSub: any;
  deviceXs: any;

  hide=true;
  registerFormGroup:any;

  constructor(public router: Router,public mediaObserver: MediaObserver,public userService:UserdataService,private formBuilder:FormBuilder) 
  {
    this.initRegisterForm();
   };

   ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })  
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  
  initRegisterForm() {
    this.registerFormGroup=this.formBuilder.group(
      {
        
        name:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]{2,30}")]),
        email:new FormControl('',[Validators.required,Validators.email]),
        mobile:new FormControl('',[Validators.required,Validators.pattern("^[789][0-9]{9}$")]),
        username:new FormControl('',[Validators.required,Validators.pattern("[A-Za-z_0-9]{3,15}")]),
        password:new FormControl('',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$")])
      }
    );
  }



  //taking data from html to here and send to reg.ts file
  userRegister()
  {
    console.log(this.registerFormGroup.value);
    
    this.userService.getUserRegData(this.registerFormGroup.value).subscribe(

      (done)=>{
        Swal.fire('Done','Regestered successfully','success');
        this.registerFormGroup.reset();
      },
      (error)=>{
        alert("User already exist");
        this.router.navigate(['/user-register/register']);
      }
    );
  }
}
