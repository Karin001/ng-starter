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
import { ResetPasswordComponent } from './passport/reset-password/reset-password.component';
import { RequestPasswordComponent } from './passport/request-password/request-password.component';
import { RegisterComponent } from './passport/register/register.component';
import { AuthComponent } from './passport/auth.component';
import { AuthBlockComponent } from './passport/auth-block/auth-block.component';
import { LogoutComponent } from './passport/logout/logout.component';


@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule,
    LayoutModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: { class: NbAuthJWTToken, key: 'token' },
          baseEndpoint: '',
          login: {
            // ...
            endpoint: '/api/users/login',
            method: 'post',
          },
          register: {
            // ...
            endpoint: '/api/users/signup',
            method: 'post',
          },
          logout: {
            endpoint: '/api/users/logout',
            method: 'delete',
          },
          requestPass: {
            endpoint: '/api/users/request-password',
            method: 'post',

          },
          resetPass: {
            endpoint: '/api/users/reset-password',
            method: 'post',
          },
          errors: {
            key: 'errorInfo',
            // getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
            //   res.error,
            //   options.errors.key,
            //   options[module].defaultErrors,
            // ),
          }
        })
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },

        },
        register: {
          redirectDelay: 500,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
          terms: true,

        },

        requestPassword: {
          redirectDelay: 5000,
          strategy: 'email',
          showMessages: {
            success: true,
            error: true,
          },
        },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 4,
            maxLength: 50,
          },
        },
      },
    }),
  ],
  declarations: [
    DefaultComponent,
    LoginComponent,
    ToResetPasswordComponent,
    ResetPasswordComponent,
    RequestPasswordComponent,
    RegisterComponent,
    AuthComponent,
    LogoutComponent,
    AuthBlockComponent]
})
export class RoutingModule { }
