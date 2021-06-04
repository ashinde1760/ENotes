import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;
  id : any;

  public newNote:any={
    title:localStorage.getItem('noteTitle'),
    content:localStorage.getItem('noteContent'),
    date:Date.now()
  }

  editNoteFormGroup:any;

  constructor(private user:UserdataService,private formBuilder:FormBuilder, public mediaObserver: MediaObserver,
              private router:Router,private snack:MatSnackBar)
               {
                 this.initEditNoteForm();
                }


  initEditNoteForm() {
    this.editNoteFormGroup = this.formBuilder.group(
      {
        title: new FormControl(this.newNote.title, [Validators.required, Validators.pattern("[A-Za-z_0-9]{3,15}")]),
        content: new FormControl(this.newNote.content, [Validators.required]),
        uid:localStorage.getItem('userId'),
        date:Date.now()
      }
    );
  }


  ngOnInit(): void {
    this.id=localStorage.getItem('noteId');  
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }



  addNewNote() 
  {
    
    this.user.editNote(this.editNoteFormGroup.value,this.id).subscribe(
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
