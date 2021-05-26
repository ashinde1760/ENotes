import { NgModule } from '@angular/core';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    FormsModule,
    SharedModuleRoutingModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class SharedModuleModule { }
