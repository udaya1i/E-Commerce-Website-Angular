import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { cardData, prodcutAdd } from '../datatype';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  productDetails: cardData[] = [];
  constructor(private service: ProductServiceService) { }
  ngOnInit(): void {
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
      })
    }
  }
}
