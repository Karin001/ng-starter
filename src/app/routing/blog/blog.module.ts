import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NbDialogModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,

    AngularMarkdownEditorModule,
    NbDialogModule.forChild({ autoFocus: false }),
    MarkdownModule.forChild(),
  ],
  declarations: [BlogListComponent, BlogDetailComponent, EditBlogComponent]
})
export class BlogModule { }
