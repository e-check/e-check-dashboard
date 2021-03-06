import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule } from 'ngx-cookie';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckinListComponent } from './checkin-list/checkin-list.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

import { EcheckService } from './echeck.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CheckinListComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EcheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
