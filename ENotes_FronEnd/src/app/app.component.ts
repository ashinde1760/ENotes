import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private cookie:CookieService,private router:Router){
   }

  ngOnInit()
  {  }

  // logout()
  // {
  //   localStorage.clear();
  //   this.cookie.deleteAll('username');
  //   this.router.navigate(['/user-login/main-home'])
    
  // }


}
