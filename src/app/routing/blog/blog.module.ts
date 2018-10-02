import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    AngularMarkdownEditorModule,
    MarkdownModule.forChild(),
  ],
  declarations: [BlogListComponent, BlogDetailComponent, EditBlogComponent]
})
export class BlogModule { }
