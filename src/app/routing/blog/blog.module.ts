import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HttpClient } from '@angular/common/http';






@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,



    MarkdownModule.forRoot({ loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      }, }),
  ],
  declarations: [
    BlogListComponent,
    BlogDetailComponent,

  ],

})
export class BlogModule { }
