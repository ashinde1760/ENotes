import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-contact_us',
  templateUrl: './contact_us.component.html',
  styleUrls: ['./contact_us.component.css']
})
export class Contact_usComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;

  constructor(private router: Router,public mediaObserver: MediaObserver,private service:UserdataService,private formBuilder:FormBuilder) 
  {
    this.initContactUsForm();
     }

     ngOnInit() {
      this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
        console.log(res.mqAlias);
        this.deviceXs = res.mqAlias === "xs" ? true : false;
      })
     }  
    
     ngOnDestroy() {
      this.mediaSub.unsubscribe();
    }
    
  contactUsFormGroup:any;


  initContactUsForm() {
    this.contactUsFormGroup=this.formBuilder.group(
      {
        name:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]{2,30}")]),
        email:new FormControl('',[Validators.required,Validators.email]),
        mobile:new FormControl('',[Validators.required,Validators.pattern("^[789][0-9]{9}$")]),
        message:new FormControl('',[Validators.required]),
      }
    );
  }


  onSubmit() {
    return this.service.contactForm(this.contactUsFormGroup.value).subscribe(
      (data:any) => {
        this.router.navigate(['/user-login/main-home'])
      },
      (error:any) =>{
        alert("something went wrong");
        this.router.navigate(['/user-register/contact_us'])
      }
    );
  }

  gotoHome() {
    this.router.navigate(['/user-login/login']);
  }
}
