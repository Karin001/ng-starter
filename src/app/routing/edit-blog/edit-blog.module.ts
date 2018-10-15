import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBlogRoutingModule } from './edit-blog-routing.module';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';

@NgModule({
  imports: [
    CommonModule,
    EditBlogRoutingModule,
    SharedModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }),
  ],
  declarations: [
    EditBlogComponent
  ]
})
export class EditBlogModule { }
