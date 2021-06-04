import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent} from './register/register.component';
import { UserRegisterRoutingModule } from './user-register-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { Contact_usComponent } from './contact_us/contact_us.component';

@NgModule({
  declarations: [
    RegisterComponent,
    Contact_usComponent
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    SharedModuleModule,
    HeaderFooterModule
  ]
})
export class UserRegisterModule { }
