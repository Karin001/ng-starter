import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from '@angular/router';
import { NbAuthService, NbAuthResult, NbTokenService, NbAuthJWTToken } from '@nebular/auth';
import { tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-reset-password',
  templateUrl: './to-reset-password.component.html',
  styleUrls: ['./to-reset-password.component.scss']
})
export class ToResetPasswordComponent implements OnInit {

  constructor(
    public activateRoute: ActivatedRoute,
    public http: HttpClient,
    public tokenService: NbTokenService,
    public router: Router
  ) {
    
   
    this.activateRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const token =  params.get('token')
        return this.http.post('/api/users/getJwt',{token})
      }),
      switchMap((result)=>{
        console.log('result',result)
        const token = new NbAuthJWTToken(result['token'],'email',new Date())
        
        this.tokenService.set(token)
        return this.tokenService.get()
      })
    ).subscribe( result=> {
      console.log('payload',result.getPayload())
      router.navigate(['/auth/reset-password'])
    })
  }

  ngOnInit() {
  }

}
