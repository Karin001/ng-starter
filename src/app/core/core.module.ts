import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadIconSvg } from '../utils/loadIconSvg';
import { BlogViewService } from './blog/blog-view.service';


@NgModule({
  providers:[BlogViewService]
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
