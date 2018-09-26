import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuToggleService {
    menuToggle$ = new Subject<boolean>()
    constructor(){}
    toggle(){
        this.menuToggle$.next(true);
    }

}