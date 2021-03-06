import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalComponent } from './normal/normal.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './normal/./header/header.component';
import { SidenavComponent } from './normal/./sidenav/sidenav.component';
import { PassportComponent } from './passport/passport.component';
const COMPONENT = [
  NormalComponent,
  HeaderComponent,
  SidenavComponent,
  PassportComponent
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: COMPONENT,
  exports: COMPONENT
})
export class LayoutModule { }
