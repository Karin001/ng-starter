import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinerService {
  loadOver$ = new Subject<boolean>();
  loadOver(val) {
    this.loadOver$.next(val);
  }
}
