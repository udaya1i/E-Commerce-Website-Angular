import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { parse } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  constructor(private service: ProductServiceService) { }
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
  submitForm(data: any) {

  }
}
