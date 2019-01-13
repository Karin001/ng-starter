import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface AddCommentReqBodyModel {
  username: string;
  message: string;
  blogId: string;
  level: {
    main: number;
    sub: number;
  };
}
export interface ToggleHeartReqBodyModel {
  username: string;
  blogId: string;
  level: {
    main: number;
    sub: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class AddCommentService {
  constructor(
    public http: HttpClient
  ) {

  }
  addComment(comment: AddCommentReqBodyModel) {
    const url = environment.baseUrl + environment.restApi.addComment;
    console.log(url);
    return this.http.post(url, comment);
  }
  toggleHeart(heart: ToggleHeartReqBodyModel) {
    const url = environment.baseUrl + environment.restApi.toggleHeart;
    console.log(url);
    return this.http.post(url, heart);
  }
}
