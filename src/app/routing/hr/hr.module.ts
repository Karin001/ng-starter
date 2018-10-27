import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr/hr.component';

@NgModule({
  imports: [
    CommonModule,
    HrRoutingModule
  ],
  declarations: [HrComponent]
})
export class HrModule { }
