import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YkContextMenuComponent } from './yk-context-menu/yk-context-menu.component';
import { YkContextMenuDirective } from './yk-context-menu/directive/yk-context-menu.directive';
import { SharedModule } from '../shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [YkContextMenuComponent, YkContextMenuDirective],
  exports: [YkContextMenuDirective],
  entryComponents: [YkContextMenuComponent]
})
export class MyUiModule { }
