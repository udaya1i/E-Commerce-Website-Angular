import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { MyOrderService } from '../service/my-order.service';
import { cardData, myorderdata } from '../datatype';
import { Router } from '@angular/router';
import { filter, iif } from 'rxjs';
import { loadTranslations } from '@angular/localize';
import { AlertmessageService } from '../service/alertmessage.service';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  constructor(
    private service: ProductServiceService,
    private orderService: MyOrderService,
    private router: Router, 
    private alertService:AlertmessageService) { }
  errorMessage: string = '';
  priceDetails: number = 0;
  proudctId: any;
  userId: number = 0;
  cardData: cardData[] | undefined;
  ngOnInit(): void {
    this.service.getCardInformation().subscribe((res: cardData[]) => {
      this.cardData = res;
      if (res) {
        let price = 0;
        res.forEach((res) => {
          if (res.Qty) {
            price = price + (+res.productPrice * + res.Qty);
            this.priceDetails = price;
          }
          this.priceDetails = price + 100 + (price * 2) / 100 - (price * 5) / 100;
        });
      }
    });
    this.service.getProduct().subscribe((res)=>{
        this.proudctId = res.id;
    });
  }
  submitForm(data: { contact: number, name: string, address: string }) {
    let userInfoObj = localStorage.getItem('user');
    let userInfo = userInfoObj && JSON.parse(userInfoObj)
    let userId = userInfo[0].id;
    if (data.address && data.contact && data.name) {
      let orderData: myorderdata = {
        ...data,
        userId,
        totalPrice: this.priceDetails,
        id: undefined,
        productId:this.proudctId
      }
      this.cardData?.forEach((res) => {
        setTimeout(() => {
          res.id && this.service.deleteProduc(res.id)
        }, 1000);
      })
      this.orderService.myOrder(orderData).subscribe((res) => {
        this.router.navigate(['my-order'])
        let userStr = localStorage.getItem('user');
        let userObj = userStr && JSON.parse(userStr);
        let userId = userObj[0].id;
        this.userId = userId;
        this.alertService.orderPlaced();
      })
    } else {
      this.alertService.empityCrenditial();
      // console.log("All Field are mandatory");
      // setTimeout(() => {
      //   this.errorMessage = '';
      // }, 3000);
      // this.errorMessage = "All Field Are Mandatory"
    }
  }
  submit() {
    //  this.orderService.getMyOrders().subscribe((res: any) => {
    //    for (let i = 0; i < res.length; i++) {
    //      console.log("test", res[i]);
    //      let filterData = res[i];
    //      let data = res[i].filter((rest:any)=> rest[i].id === this.userId);
    //      console.log("type of ", typeof data);
    //    }
    //  })
  }
}