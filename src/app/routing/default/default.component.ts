import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  doubanCode;
  openFile = false;
  value = 40;
  value1 = 60;
  value2 = 70;
  value3 = 80;
  constructor(
    private themeService: NbThemeService,
  ) { }

  ngOnInit() {
  }
  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

  setValue(newValue) {
    this.value3 = Math.min(Math.max(newValue, 0), 100);
    if(this.value3 === 100) {
      this.changeTheme('default');
    }
  }

  get status(){
    if (this.value3 <= 25) {
      return 'danger';
    } else if (this.value3 <= 50) {
      return 'warning';
    } else if (this.value3 <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }

}
