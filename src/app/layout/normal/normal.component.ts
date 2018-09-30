import { Component, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { NbThemeService, NbSidebarService, NbMenuService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
const menu_logged = [
  {
    title: 'Change Avatar',
    link: [],
  },
  {
    title: 'Change Password',
    link: [],
  },
  {
    title: 'Logout',
    link: [],
  },
];
const menu_unlogged = [
  {
    title: 'SignUp',

  },
  {
    title: 'LogIn',

  },
]
@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
  avatarOnlyPicture = false;
  menu = menu_unlogged;
  user;
  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    private authService: NbAuthService
  ) {
    this.enableDarkTheme();
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          console.log(this.user)
        }

      })
  }

  ngOnInit() {
    this.themeService.onMediaQueryChange().subscribe(nbBreakPoints => {
      const currentPoint = nbBreakPoints[1];
      this.avatarOnlyPicture = currentPoint.width <= 512 ? true : false;
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
