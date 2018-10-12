import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { PvUvService } from './pv-uv.service'
@Directive({
  selector: '[appPvUv]'
})
export class PvUvDirective implements AfterViewInit {
  @Input('appPvUv') appPvUv: {
    apiUrl: string;
    payload: {
      name: string;
      searchId?: string;
    }
  }
  @Output('pv') pv = new EventEmitter();
  pvuvdata;
  constructor(
    private http: HttpClient,
    private pvuv: PvUvService
  ) {
    let statId = this.pvuv.getCookie('statId')
    if (!statId) {

      const _statId = new Date()
      statId = "vlstat" + "-" + _statId + "-" + Math.round(Math.random() * 3000000000);
      this.pvuv.setCookie({
        name: 'statId',
        value: statId,
        expires: 365,
      })
    }

    const pvuvData = {
      statId: statId,
      browser: this.pvuv.getBrower(),
      platform: this.pvuv.getPlatform(),
      browerLanguage: this.pvuv.getBrowerLanguage()
    }
    this.pvuvdata = pvuvData;


  }


  ngAfterViewInit() {
    this.postToServer();
  }
}