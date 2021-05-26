import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SharedModuleModule} from '../shared-module/shared-module.module';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    SharedModuleModule,
    HeaderFooterModule
  ],
  exports: [
    
  ]
})
export class UserLoginModule { }
