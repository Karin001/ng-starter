import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface UploadBlogReqBodyModel {
  filename: string;
  dir: string;
  description: string;
  content: string;
}
@Injectable({
  providedIn: 'root'
})
export class UploadBlogService {
  constructor(
    public http: HttpClient
  ) {

  }
  uploadBlog(blog: UploadBlogReqBodyModel) {
    const url = environment.baseUrl + environment.restApi.uploadBlog;
    console.log(url)
    return this.http.post(url, blog);
  }
}
