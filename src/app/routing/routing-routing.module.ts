import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from '../layout/normal/normal.component';
import { DefaultComponent } from './default/default.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';

import { ToResetPasswordComponent } from './passport/to-reset-password/to-reset-password.component';
import { AuthComponent } from './passport/auth.component';
import { RegisterComponent } from './passport/register/register.component';
import { LogoutComponent } from './passport/logout/logout.component';
import { RequestPasswordComponent } from './passport/request-password/request-password.component';
import { NbResetPasswordComponent, NbLoginComponent } from '@nebular/auth';
import { ResetPasswordComponent } from './passport/reset-password/reset-password.component';
const routes: Routes = [
  {
    path: '',
    component: NormalComponent,
    children: [
      { path: '', component: DefaultComponent },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      },
      {
        path: 'visitor',
        loadChildren: './visitor/visitor.module#VisitorModule'
      },
      {
        path: 'edit',
        loadChildren: './edit-blog/edit-blog.module#EditBlogModule'
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },
      {
        path: 'to-reset-password/:token',
        component: ToResetPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
