import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { cardData, prodcutAdd, totalprice } from '../datatype';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  productDetails: cardData[] = [];
  priceDetails: totalprice = {
    price: 0,
    tax: 0,
    discount: 0,
    delivery: 0,
    total: 0
  }
  constructor(private service: ProductServiceService) { }
  ngOnInit(): void {
    let uidObj = localStorage.getItem('user');
    if (uidObj) {
      let UID = JSON.parse(uidObj)
      let userId = UID[0].id;
      this.service.getCardInformation().subscribe((res: cardData[]) => {
        if (res) {
          this.productDetails = res;
          let price = 0 ;
          console.log("test", res);
          res.forEach((res)=>{
            if(res.Qty){
              price = price + (+res.productPrice * + res.Qty);
              this.priceDetails.price = price;
            }
            this.priceDetails.price = price;
            this.priceDetails.delivery = 100;
            this.priceDetails.tax = (price*2)/100
            this.priceDetails.discount = (price*5)/100
            this.priceDetails.total =  price + 100 +(price*2)/100-(price*5)/100;
          });
        }
      });
    }
  }
  removeFromCard(productId: number) {
    if (productId) {
      this.service.deleteProductFromCard(productId).subscribe((res) => {
        console.log("product deleted successfully");
        let uidObj = localStorage.getItem('user');
        if (uidObj) {
          let UID = JSON.parse(uidObj)
          let userId = UID[0].id;
          this.service.getCardInformationOfUser(userId).subscribe((res: cardData[]) => {
            if (res) {
              this.productDetails = res;
            }
          });
        }
      });
    }
  }
}

