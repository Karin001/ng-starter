import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


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
  NbListModule,
  NbSelectModule,
  NbCalendarModule,
  NbDialogModule,
  NbButtonModule,
  NbProgressBarModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { MyUiModule } from './my-ui/my-ui.module';
import { NbSecurityModule } from '@nebular/security';
import { PvUvModule } from './pv-uv/pv-uv.module';
import { PlaceholderLoadingComponent } from './placeholder-loading/placeholder-loading.component';
import { CommonModule } from '@angular/common';
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
  FormsModule,
  MyUiModule,
  NbSecurityModule,
  NbCalendarModule,
  NbDialogModule,
  NbButtonModule,
  NbSpinnerModule,

  NbProgressBarModule,
  PvUvModule
];
@NgModule({
  imports: [...SHARED, CommonModule ],
  declarations: [PlaceholderLoadingComponent],
  exports: [...SHARED, PlaceholderLoadingComponent]
})
export class SharedModule { }
