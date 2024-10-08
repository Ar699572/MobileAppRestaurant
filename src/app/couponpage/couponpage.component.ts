import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-couponpage',
  templateUrl: './couponpage.component.html',
  styleUrls: ['./couponpage.component.scss'],
})
export class CouponpageComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  coupanCode:any;
  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss({
      "code": "",
    });
  }
  apply() {
    this.modalCtrl.dismiss({
      "code": this.coupanCode,
    });
  }
}
