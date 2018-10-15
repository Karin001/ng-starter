import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

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
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { MyUiModule } from './my-ui/my-ui.module';
import { NbSecurityModule } from '@nebular/security';
import { PvUvModule } from './pv-uv/pv-uv.module';
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
  NgxEchartsModule,
  PvUvModule
];
@NgModule({
  imports: SHARED,
  declarations: [],
  exports: SHARED
})
export class SharedModule { }
