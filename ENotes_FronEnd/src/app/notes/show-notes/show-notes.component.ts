import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;
  note: any = [];
  published_by: any;

  constructor(private userService: UserdataService,public mediaObserver: MediaObserver,
     private snack: MatSnackBar, public router: Router) {
    this.published_by = localStorage.getItem('Name');
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })

    this.userService.showNotes(localStorage.getItem('userId')).subscribe(
      (res: any) => {
        this.note = res;
      },
      (error) => {
        this.snack.open("No note available to display", 'OK', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        })
      }
    )
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }


  deleteNote(noteId: any) {
 
    Swal.fire({
      title:'Do you want to delete?',
      showDenyButton:true,
      confirmButtonText:'YES',
      denyButtonText:'NO'
    }).then((res)=>
    {
      if(res.isConfirmed)
      {
        this.userService.deleteNote(noteId).subscribe(
          (res: any) => {
            
            this.snack.open("Note deleted successfully", 'OK', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            })
            this.ngOnInit();
          },
          (error) => {
            this.snack.open("Something went wrong", 'OK', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            })
          })
      }
      else if(res.isDenied)
      {
        this.ngOnInit();
      }
    
    })
 }


  editNote(note: any) {
    localStorage.setItem('noteId', note.noteId);
    localStorage.setItem('noteTitle', note.title);
    localStorage.setItem('noteContent', note.content);
    this.router.navigate(["/notes/editNotes/",note.noteId]);
  }
}