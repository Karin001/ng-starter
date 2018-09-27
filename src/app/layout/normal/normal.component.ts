import { Component, OnInit } from '@angular/core';
import {filter, map, tap} from 'rxjs/operators';
import { ThemeChangeService } from '../../core/ui/themeChange.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NbThemeService, NbSidebarService, NbMenuService } from '@nebular/theme';
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
  avatarOnlyPicture:boolean = false;
  menu = menu_unlogged;
 
  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService
  ) {
    this.enableDarkTheme();
  }
  
  ngOnInit() {
    this.themeService.onMediaQueryChange().subscribe(nbBreakPoints => {
      const currentPoint = nbBreakPoints[1];
      this.avatarOnlyPicture = currentPoint.width<=512? true: false;
    });
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } })=>title),
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
