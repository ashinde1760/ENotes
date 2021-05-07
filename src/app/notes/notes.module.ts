import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotesComponent} from './add-notes/add-notes.component';
import { ShowNotesComponent} from './show-notes/show-notes.component';
import { HomepageComponent} from './homepage/homepage.component';
import { NotesRoutingModule } from './notes-routing.module';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    HomepageComponent,
    ShowNotesComponent,
    AddNotesComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    NotesRoutingModule,
    HeaderFooterModule
  ]
})
export class NotesModule { }
