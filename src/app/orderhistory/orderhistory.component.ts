import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
// import { AppServiceService } from 'src/app/services/app-service.service';
@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss'],
})
export class OrderhistoryComponent  implements OnInit {


  lstorders:any=[
    {image:'../../assets/Images/food1.jpeg',date:'Today , 23 Aug 2023',title:'Hamburger',amount:200,status:'SUCCESS',transId:'#ord2135002',time:'08:25AM',bank:'Bank of america'},
    {image:'../../assets/Images/food4.jpg',title:'Hamburger',amount:200,status:'FAILED',transId:'#ord2135002',time:'08:25AM',bank:'Icc Bank'},
    {image:'../../assets/Images/food3.jpg',title:'Hamburger',amount:200,status:'FAILED',transId:'#ord2135002',time:'08:25AM',bank:'Axis bank'},
    {image:'../../assets/Images/food2.jpeg',date:'Today , 23 Aug 2023',title:'Hamburger',amount:200,status:'SUCCESS',transId:'#ord2135002',time:'08:25AM',bank:'Canara bank'},
  
  
  
  
  
  
  ]
  constructor( public loadingController: LoadingController, private router: Router) { }
  payment = [];
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }
  ngOnInit() {

    this.presentLoading().then(() => {
    //   this.service.getAllPayments().subscribe((res) => {
    //     this.payment = res.document.records;
    //     console.log(this.payment);
    //     this.loadingController.dismiss();
    //   });
     });
  }

}
