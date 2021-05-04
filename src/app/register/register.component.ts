import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Reg } from './reg';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void{
  }

  regFormModule: any;
  reg = new Reg();


  //taking data from html to here and send to reg.ts file
  userRegister(value: any)
  {
    this.regFormModule = value;
    this.reg.regForm(this.regFormModule);

  }
}
