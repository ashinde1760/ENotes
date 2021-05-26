import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserdataService } from './userdata.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:UserdataService,private router:Router){}

  canActivate():boolean
  {
    if(this.service.loggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/user-login/login'])
      return false
    }
  }
}
