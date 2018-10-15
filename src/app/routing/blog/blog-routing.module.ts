import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'list/skill', pathMatch: 'full' },
  { path: 'list/skill', component: BlogListComponent },
  { path: 'list/seikats', component: BlogListComponent },
  { path: 'detail/:id', component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
