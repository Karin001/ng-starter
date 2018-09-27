import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalComponent } from './normal/normal.component';
import { PassportComponent } from './passport/passport.component';
import { SharedModule } from '../shared/shared.module';
const COMPONENT = [
  NormalComponent,

  PassportComponent
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: COMPONENT,
  exports: COMPONENT
})
export class LayoutModule { }
