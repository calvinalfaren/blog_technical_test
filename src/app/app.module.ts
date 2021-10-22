import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';
import { ToasterService } from './toaster.service';

import { AppGuard } from './app.guard';
import { AppConfig } from './app.config';
import { routing } from './app.routing';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'techinal-test-centrinova-admin' }),
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule,
    routing,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
  ],
  providers: [
              AppConfig,
              AppGuard,
              AuthService,
              ToasterService,
            ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
