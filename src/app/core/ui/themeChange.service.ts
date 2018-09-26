import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class ThemeChangeService {
    toggleTheme$ = new Subject<boolean>();
    constructor(
        ) {
        
      }
      toggle(){
        this.toggleTheme$.next(true);
      }

}