import { NgModule } from '@angular/core';
import { NbDialogModule, NbThemeModule, NbMenuModule, NbSidebarService, NbMenuService } from '@nebular/theme';


@NgModule({
  declarations: [],
  imports: [
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
  ],
  exports: [],
  providers: [NbSidebarService, NbMenuService],
})
export class NebularModule { }
