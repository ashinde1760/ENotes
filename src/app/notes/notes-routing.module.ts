import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { HomepageComponent} from './homepage/homepage.component';
const routes: Routes = [
  
  {
    path: 'addNotes',
    component: AddNotesComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'showNotes',
    component: ShowNotesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
