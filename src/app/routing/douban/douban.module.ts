import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubanComponent } from './douban/douban.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoubanRoutingModule } from './douban-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DoubanRoutingModule
  ],
  declarations: [DoubanComponent]
})
export class DoubanModule { }
