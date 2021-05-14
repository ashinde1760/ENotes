import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  published_by = "Akshay Shinde";
  published_on = new Date().toLocaleDateString();
  title= "Java";
  content= "It is a very popular and very secure programming language.";
}
