export class Info {
  /**
* 获取UA
*/
 getUA() {
 var ua = navigator.userAgent;
 if (ua.length > 250) {
  ua = ua.substring(0, 250);
 }
 return ua;
}
/**
* 获取浏览器类型
*/
 getBrower() {
 let ua = this.getUA();
 if (ua.indexOf("Maxthon") != -1) {
  return "Maxthon";
 } else if (ua.indexOf("MSIE") != -1) {
  return "MSIE";
 } else if(ua.indexOf("Edge") != -1) {
  return "Edge";
 } else if (ua.indexOf("OPR") != -1) {
  return "Opera";
 } else if (ua.indexOf("Firefox") != -1) {
  return "Firefox";
 } else if (ua.indexOf("Chrome") != -1) {
  return "Chrome";
 }  else if (ua.indexOf("Safari") != -1) {
  return "Safari";
 } else {
  return "ot";
 }
}
/**
* 获取浏览器语言
*/
 getBrowerLanguage() {
 var lang = navigator.language;
 return lang != null && lang.length > 0 ? lang : "";
}
/**
* 获取操作系统
*/
getPlatform() {
 return navigator.platform;
}
}
