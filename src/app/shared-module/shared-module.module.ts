import { NgModule } from '@angular/core';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    FormsModule,
  //  FontAwesomeModule,
    SharedModuleRoutingModule
  ],
  exports: [
    MatIconModule,
    FormsModule,
    //FontAwesomeModule,
  ]
})
export class SharedModuleModule { }
