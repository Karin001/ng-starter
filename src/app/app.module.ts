import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbThemeModule, NbSidebarService, NbMenuService, NbMenuModule, NbDialogModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { RoutingModule } from './routing/routing.module';
import { CoreModule } from './core/core.module';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NbAuthJWTInterceptor } from '@nebular/auth';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { NebularModule } from './nebular.module';
import { NbSecurityModule } from '@nebular/security';
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
    NebularModule,
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['blog', 'sakuhin'],
        },
        lockuser: {
          parent: 'guest',
        },
        user: {
          parent: 'guest',
          create: 'blog',
        },
        moderator: {
          parent: 'user',
          create: 'blog',
          remove: '*',
        },
      },
    }),
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }),
    MarkdownModule.forRoot({ loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      }, }),
    SharedModule
  ],

  providers: [ {provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
