import { Component, OnInit, Input, OnDestroy, ViewContainerRef, Renderer2 } from '@angular/core';
import { animteType2 } from '../../../animations';

@Component({
  selector: 'app-yk-context-menu',
  templateUrl: './yk-context-menu.component.html',
  styleUrls: ['./yk-context-menu.component.scss'],
  animations: [animteType2]
})
export class YkContextMenuComponent implements OnInit, OnDestroy {
  items: { content: string; action: Function, icon: string };
  state;
  set location(val) {
    this.rd2.setStyle(this.view.element.nativeElement, 'top', val.top);
    this.rd2.setStyle(this.view.element.nativeElement, 'right', val.right);
    console.log(this.view.element.nativeElement.style.right)
  }
  constructor(
    private view: ViewContainerRef,
    private rd2: Renderer2
  ) {

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {

  }
}
