import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor(public userService:UserdataService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public newNote:any={
      title:'',
      content:'',
  }

  addNewNote() {
    let msg=this.userService.addNewNote(this.newNote);
    this.snack.open(msg,'OK',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'center',
    })
  }
}
