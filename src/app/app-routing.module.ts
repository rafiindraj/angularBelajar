import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'forgot',
    component : ForgotComponent
  },
  {
    path : 'admin',
    loadChildren : ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path : 'public',
    loadChildren : ()=>import('./public/public.module').then(mod=>PublicModule)
  },
  {
    path : '',
    pathMatch : 'full',
    redirectTo : '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
