import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user:UserdataService,private router:Router,private cookie:CookieService) { }

  profile:any=localStorage.getItem('Name');

  @Input() deviceXs: any;

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.clear();
    this.cookie.deleteAll('username');
    this.router.navigate(['/user-login/main-home'])
  }

}
