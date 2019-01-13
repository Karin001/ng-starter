import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface BlogViewReqBodyModel {
  dir: string;
}
export interface BlogModel {
  dir: string;
  id?: string;
  filename: string;
  comments?;
  content?: string;
  created_on: Date;
  description: string;
}
export interface BlogViewResBodyModel {
  payload: BlogModel[];
  success: boolean;
  errorInfo: string;
}
//
export interface BlogDetailReqBodyModel {
  id: string;
}
export interface BlogDetailResBodyModel {
  payload: BlogModel;
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
    console.log('in load blog list view', url)
    return this.http.post<BlogViewResBodyModel>(url, option);
  }
  loadBlogContent(option: BlogDetailReqBodyModel): Observable<BlogDetailResBodyModel> {
    const url = environment.baseUrl + environment.restApi.loadBlogContent;
    console.log('in load blog content view', url);
    return this.http.post<BlogDetailResBodyModel>(url, option);
  }
  editBlogContent(option: { id: string; content: string }): Observable<BlogDetailResBodyModel> {
    const url = environment.baseUrl + environment.restApi.editBlog;
    console.log('edit blog content', url);
    return this.http.post<BlogDetailResBodyModel>(url, option);
  }
}
