import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
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
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },

  {
    path: "", pathMatch: "full", redirectTo:"login"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
