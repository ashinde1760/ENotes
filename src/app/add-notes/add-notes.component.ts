import { Component, OnInit } from '@angular/core';
import { addNote } from './addNote';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addNotes: any;
  addNoteObj=new addNote();

  addNewNote(value: any) {
    this.addNotes = value;
    this.addNoteObj.addNote(this.addNotes);
  }
}
