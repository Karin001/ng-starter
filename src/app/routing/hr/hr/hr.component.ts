import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit() {
    this.sidebarService.collapse();
  }

}
