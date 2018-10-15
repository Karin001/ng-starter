import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorDataComponent } from './visitor-data/visitor-data.component';
import { CalendarDialogComponent } from './calendarDialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NbDialogModule } from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitorRoutingModule,
    NbDialogModule.forChild({ autoFocus: false }),
  ],
  declarations: [
    VisitorDataComponent,
    CalendarDialogComponent
  ],
  entryComponents: [CalendarDialogComponent]
})
export class VisitorModule { }
