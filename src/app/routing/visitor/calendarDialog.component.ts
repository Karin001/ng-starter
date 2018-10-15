import { Component, OnInit } from '@angular/core';
import { CalendarDateService } from 'src/app/core/blog/calendarDate.service';
import { PvUvService } from 'src/app/shared/pv-uv/pv-uv.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-calendar-dialog',
  template: `
  <nb-calendar
  [(date)]="date"
  (dateChange)="onDateChange($event)"
  [showHeader]="false"
  [filter]="filter"
  >
  `,
  styles: [``]
})
export class CalendarDialogComponent implements OnInit {
  date;
  filter;
  constructor(
    protected ref: NbDialogRef<CalendarDialogComponent>,
    private dateService: CalendarDateService,

  ) { }

  ngOnInit(): void {
    this.dateService.getDateFilter().subscribe(fn => {
      this.filter = fn;
    });
  }
  dismiss() {
    this.ref.close();
  }
  onDateChange(date) {
    this.dateService.setDate(date);
  }
}
