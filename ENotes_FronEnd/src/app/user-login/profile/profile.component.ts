import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;

  profile:any={
    name:'',
    uid:'',
    email:'',
    mobile:'',
    username:''
  };
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })


    this.profile.name=localStorage.getItem('Name');
    this.profile.username=localStorage.getItem('username');
    this.profile.uid=localStorage.getItem('userId');
    this.profile.email=localStorage.getItem('email');
    this.profile.mobile=localStorage.getItem('mobile');
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }


}
