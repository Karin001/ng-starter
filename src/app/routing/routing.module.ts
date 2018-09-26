import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './passport/login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [DefaultComponent, LoginComponent]
})
export class RoutingModule { }
