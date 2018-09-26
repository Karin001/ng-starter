import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
const SHARED = [
  RouterModule,
  HttpClientModule,
  NbLayoutModule,
    NbSidebarModule,
];
@NgModule({
  imports: SHARED,
  declarations: [],
  exports: SHARED
})
export class SharedModule { }
