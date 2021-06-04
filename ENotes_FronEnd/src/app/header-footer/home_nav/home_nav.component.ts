import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home_nav',
  templateUrl: './home_nav.component.html',
  styleUrls: ['./home_nav.component.css']
})
export class Home_navComponent implements OnInit {
  @Input() deviceXs: any;
  constructor() { }

  ngOnInit() {
  }

}
