import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {


  notes: any = [];
  published_by: any;
  constructor(private userService: UserdataService, private snack: MatSnackBar, public router: Router) {
    this.published_by = localStorage.getItem('userName');
  }

  ngOnInit(): void {
    this.userService.showNotes(localStorage.getItem('userId')).subscribe(
      (res: any) => {
        this.notes = res;
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


  deleteNote(noteId: any) {
  
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


  editNote(note: any) {
    localStorage.setItem('noteId', note.noteId);
    localStorage.setItem('noteTitle', note.title);
    localStorage.setItem('noteContent', note.content);
    this.router.navigate(["/notes/editNotes/",note.noteId]);
  }
}