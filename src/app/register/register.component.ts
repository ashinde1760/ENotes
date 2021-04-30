import { Component, OnInit } from '@angular/core';
import { Register } from './register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void
  {
    
  }

  userRegister(value: any)
  {
    console.log("hello");


  }
}
