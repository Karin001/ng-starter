import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'list/skill', pathMatch: 'full' },
  { path: 'list/skill', component: BlogListComponent },
  { path: 'list/hoka', component: BlogListComponent },
  { path: 'list/seikats', component: BlogListComponent },
  { path: 'detail', component: BlogDetailComponent },
  { path: 'edit-blog', component: EditBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
