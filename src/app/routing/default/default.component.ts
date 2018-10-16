import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  doubanCode
  openFile =false;
  constructor() { }

  ngOnInit() {
  }
  checkVal(){
    if(this.doubanCode === 'dbdb'){
      this.openFile = true;
    }
  }

}
