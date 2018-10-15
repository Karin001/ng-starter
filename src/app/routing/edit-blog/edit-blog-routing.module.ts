import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

const routes: Routes = [
  { path: 'edit-blog', component: EditBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBlogRoutingModule { }
