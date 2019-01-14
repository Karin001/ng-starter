import { Component, OnInit } from '@angular/core';
import { filter, map, tap, switchMap, take } from 'rxjs/operators';
import { NbThemeService, NbSidebarService, NbMenuService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router, NavigationEnd } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { animteType1 } from '../../animations';
import { SpinerService } from 'src/app/core/ui/spiner.service';
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
  styleUrls: ['./normal.component.scss'],
  animations: [animteType1]
})
export class NormalComponent implements OnInit {
  avatarOnlyPicture = false;

  menu;
  sidebarFixed = false;
  user;
  get title() {
    if (this.user && this.user.name !== 'lockUser') {
      return '已登录'
    } else if (this.user && this.user.name === 'lockUser') {
      return '请用新密码重新登录'
    } else {
      return '登录获得更多权限'
    }

  }
  items = [
    {
      title: '技术博客',
      link: ['/blog/list/skill'],
    },
    {
      title: '生活博客',
      link: ['/blog/list/seikats'],
    },
    {
      title: '其他',
      link: ['/blog/list/hoka'],
    },
    {
      title: '作品',
      link: [],
    },
    {
      title: '写博文',
      link: ['/blog/edit-blog']
    }
  ];
  sidebarState = 'expanded';
  routerAnimationState = 'active1';
  showSpiner = false;
  menu_unlogged = [
    { content: '登录', icon: 'fas fa-user', action: () => { this.router.navigate(['/auth/login']); } },
    { content: '注册', icon: 'fas fa-sign-in-alt', action: () => { this.router.navigate(['/auth/register']); } },
  ];
  menu_logged = [
    { content: '更改密码', icon: 'fas fa-key', action: () => { this.router.navigate(['/auth/request-password']); } },
    { content: '登出', icon: 'fas fa-sign-out-alt', action: () => { this.router.navigate(['/auth/logout']); } },
  ];
  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    private authService: NbAuthService,
    public menuservice: NbMenuService,

    private router: Router,
  ) {

    this.menu = this.menu_unlogged;
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
          console.log('valid')
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
          console.log(this.user);
          this.menu = this.menu_logged;
        } else {
          console.log('invalid')
          this.menu = this.menu_unlogged;
        }

      });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerAnimationState = this.routerAnimationState === 'active1' ? 'active2' : 'active1'; // 路由全局动画，每次路由事件结束都会触发动画
      }
    });
    // setInterval(() => { this.routerAnimationState = this.routerAnimationState === 'active1' ? 'active2' : 'active1'; }, 200)
  }

  ngOnInit() {
    console.log(window.document.body.clientWidth)
    if (window.document.body.clientWidth < 982) {
      console.log(123123)
      this.sidebarState = 'collapsed'
    }
    this.themeService.onMediaQueryChange().subscribe(nbBreakPoints => {
      const currentPoint = nbBreakPoints[1];
      this.avatarOnlyPicture = currentPoint.width <= 982 ? true : false;
      this.sidebarFixed = currentPoint.width <= 982 ? true : false;
      if (currentPoint.width <= 982) {
        this.sidebarService.collapse();
      } else {
        this.sidebarService.expand();
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
  onClick() {
    console.log('213')
    this.menuservice.collapseAll()
  }
  toggle() {

    this.sidebarService.toggle(false);
    return false;
  }
  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }
}
