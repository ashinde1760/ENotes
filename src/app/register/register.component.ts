import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Register } from './register';
import { Reg } from './reg';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  regModel = new Reg('', '', '');

  
  ngOnInit(): void
  {
    
  }

  userRegister(value: any)
  {
    console.log("hello");


  }
}
