import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserdataService } from '../../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor(public router:Router ,public userService:UserdataService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public newNote:any={
      title:'',
      content:'',
      uid:localStorage.getItem('userId')
  }

  addNewNote() 
  {

    this.userService.addNewNote(this.newNote).subscribe(
      

      (res:any)=>{
                 
                 this.snack.open("Note Created Successfully",'OK',{
                 duration:3000,
                 verticalPosition:'top',
                 horizontalPosition:'center',
              })
              this.router.navigate(['/notes/showNotes'])
            },
      (error)=>{
                console.log(this.newNote);
                alert("Something Went wrong");
                this.router.navigate(['/notes/addNotes']);
              }
        );
  }
}
