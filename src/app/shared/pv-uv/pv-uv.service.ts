import { Injectable } from '@angular/core';
import {Cookies} from './utils/cookies'
import {Info} from './utils/info'
const _cookie = new Cookies();
const _info = new Info();
@Injectable()
export class PvUvService {

  constructor() { 

  }
  getCookie(name:string){
   return _cookie.getCookie(name)
  }
  setCookie({name,value,expires}){
    _cookie.setCookie(name,value,expires)
  }
  getUA(){
    return _info.getUA()
  }
  getBrower(){
    return _info.getBrower()
  }
  getBrowerLanguage(){
    return _info.getBrowerLanguage()
  }
  getPlatform(){
    return _info.getPlatform()
  }
}