import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CalendarDateService {
  date$ = new BehaviorSubject<Date>(new Date());
  dateFilter$ = new BehaviorSubject<Function>(null);
  constructor() {

  }
  setDate(date: Date) {
    this.date$.next(date);

  }
  getDate() {
    return this.date$.asObservable();
  }
  setDateFilter(fn: Function) {
    this.dateFilter$.next(fn);
  }
  getDateFilter() {
    return this.dateFilter$.asObservable();
  }

}
