import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbThemeModule, NbSidebarService, NbMenuService, NbMenuModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { RoutingModule } from './routing/routing.module';
import { CoreModule } from './core/core.module';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    CoreModule,
    LayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    SharedModule
  ],

  providers: [NbSidebarService,NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
