import { NbPasswordAuthStrategy, NbAuthJWTToken, NbPasswordAuthStrategyOptions } from "@nebular/auth";
import { HttpErrorResponse } from "@angular/common/http";
import { getDeepFromObject } from "@nebular/auth/helpers";

export const nbAuthModuleSetting = {
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
        getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
          res.error,
          options.errors.key,
          options[module].defaultErrors,
        ),
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
}
