import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoubanComponent } from './douban/douban.component';

const routes: Routes = [
  { path: '', component: DoubanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubanRoutingModule { }
