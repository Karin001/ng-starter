import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from '../../core/ui/themeChange.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
 constructor(
  private themeService: NbThemeService
 ){}

  ngOnInit() {
    this.enableDarkTheme();
  }
  enableDarkTheme() {
    this.themeService.changeTheme('dark');
  }
}
