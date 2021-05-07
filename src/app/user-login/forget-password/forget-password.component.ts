import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../../userdata.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public router: Router) { }
  error: string="";
  ngOnInit(): void { }

  forgetPassData = new UserdataService(this.router)
  forgetPassword(value: any) {
    this.error = this.forgetPassData.getForgetPassData(value);
  }
}
