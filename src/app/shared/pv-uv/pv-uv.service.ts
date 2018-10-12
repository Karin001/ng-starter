import { Injectable } from '@angular/core';

import { Cookies } from './utils/cookies';
import { Info } from './utils/info';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
const _cookie = new Cookies();
const _info = new Info();
@Injectable()
export class PvUvService {

  constructor(
    private http: HttpClient
  ) {

  }
  getCookie(name: string) {
    return _cookie.getCookie(name)
  }
  setCookie({ name, value, expires }) {
    _cookie.setCookie(name, value, expires)
  }
  getUA() {
    return _info.getUA()
  }
  getBrower() {
    return _info.getBrower()
  }
  getBrowerLanguage() {
    return _info.getBrowerLanguage()
  }
  getPlatform() {
    return _info.getPlatform()
  }
  getPvUv({ apiUrl, name }): Observable<any> {
    return this.http.get(apiUrl + '?name=' + name).pipe(
      retry(3),
      catchError(err => {
        throw new Error('error in source. Details: ' + err);
      })
    );
  }
  postToServer({
    name,
    searchId,
    statId,
    browser,
    platform,
    browerLanguage,
    apiUrl
  }) {
    const reqBody = {
      name,
      searchId,
      statId,
      browser,
      platform,
      browerLanguage

    };
    return this.http.post(apiUrl, reqBody).pipe(
      retry(3),
      catchError(err => {
        throw new Error('error in source. Details: ' + err);
      })
    );
  }
}
