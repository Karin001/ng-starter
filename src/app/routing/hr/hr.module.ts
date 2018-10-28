import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr/hr.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HrRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [HrComponent]
})
export class HrModule { }
