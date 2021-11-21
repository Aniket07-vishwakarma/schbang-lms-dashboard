import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MenubarModule} from 'primeng/menubar';
import { HomePageComponent } from './home-page/home-page.component';
import { MyCartPageComponent } from './my-cart-page/my-cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { HeaderComponent } from './header/header.component';
import { GlobalService } from './global';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    MyCartPageComponent,
    CheckoutPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
