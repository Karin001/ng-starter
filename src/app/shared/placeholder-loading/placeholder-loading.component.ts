import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-loading',
  templateUrl: './placeholder-loading.component.html',
  styleUrls: ['./placeholder-loading.component.scss']
})
export class PlaceholderLoadingComponent implements OnInit {
  @Input('nums') nums: number;
  get _nums() {
    const _arr = [];
    for (let i = 0; i < this.nums; i++ ) {
      _arr.push(i);
    }
    return _arr;
  }
  constructor() { }

  ngOnInit() {
  }

}
