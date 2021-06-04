import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact_usComponent } from './contact_us/contact_us.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contact_us',
    component: Contact_usComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegisterRoutingModule { }
