import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-login/login/login.component';
import { UserLoginModule } from './user-login/user-login.module';
import { UserRegisterModule } from './user-register/user-register.module';
import { NotesModule } from './notes/notes.module';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: LoginComponent
  },
  {
    path: 'user-login',
    loadChildren: () => UserLoginModule
  },
  {
    path: 'user-register',
    loadChildren: () => UserRegisterModule
  },
  {
    path: 'notes',
    loadChildren: () => NotesModule,
    canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
