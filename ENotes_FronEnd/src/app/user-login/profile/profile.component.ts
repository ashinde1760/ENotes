import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any={
    name:'',
    uid:'',
    email:'',
    mobile:''
  };
  constructor() { }

  ngOnInit() {
    this.profile.name=localStorage.getItem('userName');
    this.profile.uid=localStorage.getItem('userId');
    this.profile.email=localStorage.getItem('email');
    this.profile.mobile=localStorage.getItem('mobile');
  }


}
