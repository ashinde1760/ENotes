import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  

  ngOnInit(): void {
  }


  loginObj: any;

  constructor(public router: Router) {
    this.loginObj = {};
  }
  email = "ashinde1760@gmail.com";
  password = "Akki@123";


  userLogin(value: any) {

    if ((this.email === value.email) && (this.password === value.password)) {
      this.router.navigate(['/homepage']);
    }
    else {
      this.router.navigate(['/login']);
    }
    

  }

}
