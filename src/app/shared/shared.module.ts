import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule,
  NbUserModule,
  NbMenuModule,
  NbContextMenuModule,
  NbInputModule,
  NbAlertModule,
  NbCheckboxModule,
  NbCardModule,
  NbSpinnerModule,
  NbSearchModule,
  NbInfiniteListDirective,
  NbListModule,
  NbSelectModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
const SHARED = [
  RouterModule,
  HttpClientModule,
  FormsModule,
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule,
  NbUserModule,
  NbMenuModule,
  NbContextMenuModule,
  NbInputModule,
  NbAlertModule,
  NbCheckboxModule,
  NbCardModule,
  NbSpinnerModule,
  NbSearchModule,
  NbListModule,
  NbSelectModule,
  FormsModule
];
@NgModule({
  imports: SHARED,
  declarations: [],
  exports: SHARED
})
export class SharedModule { }
