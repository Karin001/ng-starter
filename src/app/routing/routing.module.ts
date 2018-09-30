import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './passport/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken, NbAuthSimpleToken, NbPasswordAuthStrategyOptions } from '@nebular/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { ToResetPasswordComponent } from './passport/to-reset-password/to-reset-password.component';
import { nbAuthModuleSetting } from '../nbConfig/nbAuthModuleSetting';


@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule,
    LayoutModule,
    NbAuthModule.forRoot(nbAuthModuleSetting),
  ],
  declarations: [DefaultComponent, LoginComponent, ToResetPasswordComponent]
})
export class RoutingModule { }
