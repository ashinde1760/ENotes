import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {
  
  id : any;

  public newNote:any={
    title:localStorage.getItem('noteTitle'),
    content:localStorage.getItem('noteContent'),
    
  }


  constructor(private user:UserdataService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('noteId');  
  }


  addNewNote() 
  {
    
    this.user.editNote(this.newNote,this.id).subscribe(
    (res:any)=>{
                 this.snack.open("Note Updated Successfully",'OK',{
                 duration:3000,
                 verticalPosition:'top',
                 horizontalPosition:'center',
              })
              this.router.navigate(['/notes/showNotes'])
            },
      (error)=>{
                console.log(this.newNote);
                alert("Something Went wrong");
                this.router.navigate(['/notes/showNotes']);
              }
        );
  }



}
