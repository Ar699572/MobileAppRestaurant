import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';
import { RegisterComponent } from './register/register.component';
import { VerficationpageComponent } from './verficationpage/verficationpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { RecommendpageComponent } from './recommendpage/recommendpage.component';
import { LocationComponent } from './location/location.component';

import { AddresspageComponent } from './addresspage/addresspage.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CouponpageComponent } from './couponpage/couponpage.component';
import { OrderspageComponent } from './orderspage/orderspage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'home1',  component: HomePage
  },
  {
    path: 'Welcome',  component: WelcomepageComponent
  },
  {
    path: 'Register',  component: RegisterComponent
  },
  {
    path: 'verfiy',  component: VerficationpageComponent
  },
  {
    path: 'Forgot',  component: ForgotPasswordComponent
  },
  {
    path: 'search1',  component: SearchpageComponent
  },
  {
    path: 'rec',  component: RecommendpageComponent
  },
  {
    path: 'Location',  component: LocationComponent
  },

  {
    path: 'add',  component: AddresspageComponent
  },
  {
    path: 'fav',  component: FavouriteComponent
  },
  {
    path: 'coupon',  component: CouponpageComponent
  },
  {
    path: 'orders',  component: OrderspageComponent
  },
  {
    path: 'profile',  component: ProfilepageComponent
  },
  {
    path: 'orderhistory',  component: OrderhistoryComponent
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
