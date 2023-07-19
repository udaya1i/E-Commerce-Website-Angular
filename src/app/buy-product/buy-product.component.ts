import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { MyOrderService } from '../service/my-order.service';
import { myorderdata } from '../datatype';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  constructor(private service: ProductServiceService, private orderService: MyOrderService) { }
  priceDetails: number = 0;
  ngOnInit(): void {
    this.service.getCardInformation().subscribe((res: any[]) => {
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
  }
  submitForm(data: { contact: number, name: string, address: string }) {
    let userInfoObj = localStorage.getItem('user');
    let userInfo = userInfoObj && JSON.parse(userInfoObj)
    let userId = userInfo[0].id;
    if (data.address && data.contact && data.name){
      let orderData:myorderdata = {
        ...data,
        userId,
        totalPrice:this.priceDetails
      }
      this.orderService.myOrder(orderData).subscribe((res)=>{
        window.alert("Your Order Is placed!!!");
        console.log("res", res);
      })
    }else{
      console.log("All Field are mandatory");
    }
  }
}
