import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuToggleService } from '../../../core/ui/menuToggle.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav:MatSidenav
  options = {
    bottom: 0,
      fixed: false,
      top: 0
  }
  constructor(
    public menuToggleService:MenuToggleService
  ) { 
    this.menuToggleService.menuToggle$.subscribe(()=>{
      this.sidenav.toggle();
    })
  }

  ngOnInit() {
  }

}
