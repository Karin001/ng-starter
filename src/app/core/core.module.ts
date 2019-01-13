import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadIconSvg } from '../utils/loadIconSvg';
import { BlogViewService } from './blog/blog-view.service';
import { UploadBlogService } from './blog/upload-blog-service';
import { NbRoleProvider } from '@nebular/security';
import { RoleProvider } from '../role.provider';
import { CalendarDateService } from './blog/calendarDate.service';
import { SpinerService } from './ui/spiner.service';
import { AddCommentService } from './blog/comment.service';


@NgModule({
  providers: [
    { provide: NbRoleProvider, useClass: RoleProvider },
    BlogViewService,
    UploadBlogService,
    CalendarDateService,
    SpinerService,
    AddCommentService
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
    loadIconSvg(iconRegistry, sanitizer);
  }
}
