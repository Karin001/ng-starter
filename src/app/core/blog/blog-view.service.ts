import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface BlogViewReqBodyModel {
  dir: string;
}
export interface BlogModel {
  dir: string;
  filename: string;
  content: string;
  created_on: Date;
  description: string;
}
export interface BlogViewResBodyModel {
  payload: BlogModel[];
  success: boolean;
  errorInfo: string;
}
@Injectable({
  providedIn: 'root'
})
export class BlogViewService {

  constructor(
    public http: HttpClient
  ) {

  }
  loadBlogList(option: BlogViewReqBodyModel = { dir: '' }): Observable<BlogViewResBodyModel> {

    const url = environment.baseUrl + environment.restApi.loadBlogList;
    console.log('in load blog view', url)
    return this.http.post<BlogViewResBodyModel>(url, option);
  }
}
