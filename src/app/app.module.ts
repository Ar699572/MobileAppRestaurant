import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegisterComponent } from './register/register.component';
import { VerficationpageComponent } from './verficationpage/verficationpage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageModule } from './home/home.module';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { FormsModule } from '@angular/forms';
import { RecommendpageComponent } from './recommendpage/recommendpage.component';
import { LocationComponent } from './location/location.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AddresspageComponent } from './addresspage/addresspage.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CouponpageComponent } from './couponpage/couponpage.component';
import { SharedModule } from './components/shared.module';
import { OrderspageComponent } from './orderspage/orderspage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@NgModule({
  declarations: [AppComponent,WelcomepageComponent,RegisterComponent,VerficationpageComponent,ForgotPasswordComponent,SearchpageComponent,RecommendpageComponent,
    LocationComponent,AddresspageComponent,FavouriteComponent,CouponpageComponent,OrderhistoryComponent,OrderspageComponent,ProfilepageComponent],
  imports: [BrowserModule,AppRoutingModule,FormsModule,CommonModule,SharedModule,IonicModule.forRoot(),HomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
