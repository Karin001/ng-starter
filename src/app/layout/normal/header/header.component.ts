import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MenuToggleService } from '../../../core/ui/menuToggle.service';
import { ThemeChangeService } from '../../../core/ui/themeChange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(
    public menuToggleService: MenuToggleService,
    public ThemeChangeService: ThemeChangeService
  ) { }
  ngOnInit() {
  }
  toggle(){
    this.menuToggleService.toggle();
   
  }
  theme(){
    this.ThemeChangeService.toggle();
  }
}
