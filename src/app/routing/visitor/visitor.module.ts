import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorDataComponent } from './visitor-data/visitor-data.component';
import { CalendarDialogComponent } from './calendarDialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NbDialogModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitorRoutingModule,
    NgxEchartsModule,
    NbDialogModule.forChild({ autoFocus: false }),
  ],
  declarations: [
    VisitorDataComponent,
    CalendarDialogComponent
  ],
  entryComponents: [CalendarDialogComponent]
})
export class VisitorModule { }
