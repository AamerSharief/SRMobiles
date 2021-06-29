import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackberryComponent } from './blackberry/blackberry.component';
import { IphoneComponent } from './iphone/iphone.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { OppoComponent } from './oppo/oppo.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { VivoComponent } from './vivo/vivo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackberryComponent,
    IphoneComponent,
    OneplusComponent,
    OppoComponent,
    XiaomiComponent,
    VivoComponent,
    HomeComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
