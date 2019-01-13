import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommentsRoutingModule
  ],
  declarations: [CommentsComponent],
  exports: [CommentsComponent]
})
export class CommentsModule { }
