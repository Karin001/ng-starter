import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from '../layout/normal/normal.component';
import { DefaultComponent } from './default/default.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: NormalComponent,
    children: [
      {path:'',component:DefaultComponent}
    ]
  },
  {
    path:'passport',
    component: PassportComponent,
    children:[
      {path:'login', component:LoginComponent}
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
