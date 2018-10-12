import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PvUvService } from './pv-uv.service';
import { PvUvDirective } from './pv-uv.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PvUvDirective],
  providers: [PvUvService],
  exports:[PvUvDirective]
})
export class PvUvModule { 
 
}