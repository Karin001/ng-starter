import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorDataComponent } from './visitor-data/visitor-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'list/hoka', pathMatch: 'full' },
  { path: 'list/hoka', component: VisitorDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
