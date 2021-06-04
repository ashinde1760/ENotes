import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserdataService } from '../../userdata.service';
import { Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;

  constructor(public router:Router,private formBuilder: FormBuilder,
              public mediaObserver: MediaObserver ,public userService:UserdataService,
              private snack:MatSnackBar) {
                this.initaddNoteForm();
               }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
    
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }


  addNoteFormGroup: any;

  initaddNoteForm() {
    this.addNoteFormGroup = this.formBuilder.group(
      {
        title: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z_0-9]{3,15}")]),
        content: new FormControl('', [Validators.required]),
        uid:localStorage.getItem('userId')
      }
    );
  }


  addNewNote() 
  {

    this.userService.addNewNote(this.addNoteFormGroup.value).subscribe(
      

      (res:any)=>{
                 
                 this.snack.open("Note Created Successfully",'OK',{
                 duration:3000,
                 verticalPosition:'top',
                 horizontalPosition:'center',
              })
              this.router.navigate(['/notes/showNotes'])
            },
      (error)=>{
                console.log(this.addNoteFormGroup);
                alert("Something Went wrong");
                this.router.navigate(['/notes/addNotes']);
              }
        );
  }
}
