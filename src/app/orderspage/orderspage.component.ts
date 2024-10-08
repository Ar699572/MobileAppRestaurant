import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
// import { AppServiceService } from '';
// import { AddItemsComponent } from '../components/add-items/add-items.component';
import { CouponpageComponent } from '../couponpage/couponpage.component';
@Component({
  selector: 'app-orderspage',
  templateUrl: './orderspage.component.html',
  styleUrls: ['./orderspage.component.scss'],
})
export class OrderspageComponent  implements OnInit {


  orders:any=[{title:'Green bawarchi' ,time:'10:20' ,amount:'230.00',image:'../../assets/Images/food1.jpeg',qty:2}];
  constructor() { }

  ngOnInit() {}

}
