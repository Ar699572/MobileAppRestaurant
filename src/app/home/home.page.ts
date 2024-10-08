import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  myCustomIcon = "/assets/icons/custom.svg";
  constructor(public router:Router) {}
  
  slideOpts = {
    pagination: true,
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1.5,
    
  };
  RegisterPage(){
   
    this.router.navigateByUrl('Welcome')
  }
}
