import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MediaObserver,MediaChange } from '@angular/flex-layout'


@Component({
  selector: 'app-main_home',
  templateUrl: './main_home.component.html',
  styleUrls: ['./main_home.component.css']
})
export class Main_homeComponent implements OnInit,OnDestroy {
  
  mediaSub: any;
  deviceXs: any;

  constructor(private cookie:CookieService,public mediaObserver: MediaObserver) { }

  ngOnInit() 
  {  
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }

  
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
