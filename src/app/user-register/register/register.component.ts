import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  ngOnInit(): void{
  }

  constructor(public router: Router) { };

  data = new UserdataService(this.router);


  //taking data from html to here and send to reg.ts file
  userRegister(value: any)
  {
    this.data.getUserRegData(value);

  }
}
