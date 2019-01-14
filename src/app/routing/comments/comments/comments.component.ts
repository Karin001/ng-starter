import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { AddCommentService } from 'src/app/core/blog/comment.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { filter, switchMap } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @ViewChild('dialog') dialog
  @Input('comments') comments;
  @Input('blogId') blogId;
  yourComment = '';
  user;
  nowtime = Date.now();
  toWho = '';
  level = {
    main: -1,
    sub: -1
  };

  constructor(
    private addCommentSvc: AddCommentService,
    private authService: NbAuthService,
    private dialogService: NbDialogService,
    private router: Router
  ) { }
  getHeart(liked: String[]) {

    return liked.includes(this.user ? this.user.name : null);
  }
  getTime(time){
    const lstIsoDate = new Date(this.nowtime).toISOString().slice(0, 10)
    const isoDate = new Date(time).toISOString().slice(0,10);
    if(lstIsoDate !== isoDate){
      return new Date(time).toISOString().slice(0, 10) + ' ' + new Date(time).toISOString().slice(11,18)
    }
    return (this.nowtime - Date.parse(time))/(1000 * 60 * 60) >= 1?
    Math.floor((this.nowtime - Date.parse(time))/(1000 * 60 * 60)) + '小时前':
    Math.floor(((this.nowtime - Date.parse(time))%(1000 * 60 * 60))/60000) + '分钟前'
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
  openDlg(dialog: TemplateRef<any>) {

    this.dialogService.open(dialog, { context: '请登录' });
  }
  reply(main = -1, username, sub = -1) {
    window.scrollTo(0, document.documentElement.scrollHeight);
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
          }).subscribe(res=>{
            if(res['success']){
              this.comments = res['payload']
              this.nowtime = Date.now()
            }
            
          });
        } else {
          this.openDlg(this.dialog)

        }

      });

  }

  heart(main, data, sub = -1) {
   
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          if (data.like.includes(this.user.name)) {
            console.log('hear', data.like);
            data.like = data.like.filter(name => name !== this.user.name);
            console.log('ear', data.like);
          } else {
            data.like = [...data.like, this.user.name];
          }
          this.addCommentSvc.toggleHeart({
            blogId: this.blogId,
            username: this.user.name,
            level: {
              main, sub
            }
          }).subscribe(res=>{
            if(res['success']){
              this.comments = res['payload'];
              this.nowtime = Date.now();
            }
          });
        } else {
          this.openDlg(this.dialog)
        }
      });
  }

  toLogin(){
    this.router.navigateByUrl('/auth')
  }
}
