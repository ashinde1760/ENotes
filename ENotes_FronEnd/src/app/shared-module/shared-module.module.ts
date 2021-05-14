import { NgModule } from '@angular/core';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    FormsModule,
    SharedModuleRoutingModule
  ],
  exports: [
    MatIconModule,
    FormsModule,
    MatToolbarModule,
  ]
})
export class SharedModuleModule { }
