import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user:UserdataService) { }

  profile:any=localStorage.getItem('userName');

  ngOnInit(): void {

  }
}
