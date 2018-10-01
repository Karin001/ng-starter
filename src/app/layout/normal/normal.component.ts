import { Component, OnInit } from '@angular/core';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { NbThemeService, NbSidebarService, NbMenuService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
const menu_logged = [
  {
    title: 'Change Avatar',
    link: [],
  },
  {
    title: 'Change Password',
    link: ['/auth/request-password'],
  },
  {
    title: 'Logout',
    link: ['/auth/logout'],
  },
];
const menu_unlogged = [
  {
    title: 'SignUp',
    link: ['/auth/register']
  },
  {
    title: 'LogIn',
    link: ['/auth/login']
  },
];
@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
  avatarOnlyPicture = false;
  menu = menu_unlogged;
  sidebarFixed = false;
  user;
  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    private authService: NbAuthService
  ) {

    // this.authService.isAuthenticated()
    // .pipe(
    //   switchMap(state => this.authService.getToken()),
    // )
    // .subscribe((token: NbAuthJWTToken) => {
    //   console.log(token,token.isValid(),token.getPayload());
    //   if (token.isValid()) {
    //     this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
    //     console.log(this.user);
    //     this.username = this.user['name'];
    //     this.menu = menu_logged;
    //   }

    // });
    this.authService.onAuthenticationChange()
      .pipe(
        filter(state => state === true),
        switchMap(state => this.authService.getToken()),
      )
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          console.log(this.user);
          this.menu = menu_logged;
        }

      });
  }

  ngOnInit() {
    this.themeService.onMediaQueryChange().subscribe(nbBreakPoints => {
      const currentPoint = nbBreakPoints[1];
      this.avatarOnlyPicture = currentPoint.width <= 512 ? true : false;
      this.sidebarFixed = currentPoint.width <= 512 ? true : false;
      if(currentPoint.width <= 512) {
        this.sidebarService.collapse();
      }
    });
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        console.log(title);
      })
  }
  toggle() {
    this.sidebarService.toggle(false);
    return false;
  }
  enableDarkTheme() {
    //this.themeService.changeTheme('dark');
  }
}
