import { Component, OnInit, Input } from '@angular/core';
import { AddCommentService } from 'src/app/core/blog/comment.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input('comments') comments;
  @Input('blogId') blogId;
  yourComment = '';
  user;
  toWho = '';
  level = {
    main: -1,
    sub: -1
  };

  constructor(
    private addCommentSvc: AddCommentService,
    private authService: NbAuthService,
  ) { }
  getHeart(liked: String[]) {

    return liked.includes(this.user ? this.user.name : null);
  }
  ngOnInit() {
    this.authService.onAuthenticationChange()
      .pipe(
        filter(state => state === true),
        switchMap(state => this.authService.getToken()),
      )
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          console.log('valid')
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          console.log(this.user);

        } else {

        }

      });
  }
  reply(main = -1, username, sub = -1) {
    this.toWho = `to ${username}:`;
    this.level = {
      main,
      sub
    };
  }
  comment() {
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          this.addCommentSvc.addComment({
            blogId: this.blogId,
            username: this.user.name,
            message: this.level.sub === -1 ? this.yourComment : this.toWho + this.yourComment,
            level: this.level
          }).subscribe(console.log);
        } else {


        }

      });

  }

  heart(main, data, sub = -1) {
    if (data.like.includes(this.user.name)) {
      console.log('hear', data.like);
      data.like = data.like.filter(name => name !== this.user.name);
      console.log('ear', data.like);
    } else {
      data.like = [...data.like, this.user.name];
    }
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          this.addCommentSvc.toggleHeart({
            blogId: this.blogId,
            username: this.user.name,
            level: {
              main, sub
            }
          }).subscribe(console.log);
        } else {
        }
      });
  }
}
