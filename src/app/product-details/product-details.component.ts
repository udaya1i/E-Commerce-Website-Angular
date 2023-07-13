import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { cardData, prodcutAdd } from '../datatype';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  count: number = 1;
  limited: boolean = false;
  productDetails: prodcutAdd | undefined;
  removeToCard: boolean = false;
  constructor(private activeRouter: ActivatedRoute, private service: ProductServiceService) { }
  ngOnInit(): void {
    let pid = this.activeRouter.snapshot.paramMap.get('details');
    pid && this.service.getProductById(pid).subscribe((result) => {
      this.productDetails = result;
      let cardItem = localStorage.getItem('addToCard');
      if (pid && cardItem) {
        let cardItems = JSON.parse(cardItem);
        cardItem = cardItems.filter((cardItem: prodcutAdd) => pid === cardItem.id.toString());
        if (cardItem) {
          if (cardItem.length) {
            this.removeToCard = true;
          } else {
            this.removeToCard = false;
          }
        }
      }
    });
  }
  qty(action: string) {
    if (action === 'add' && this.count <= 4) {
      this.count = this.count + 1;
    } else if (action === 'remove') {
      if (this.count >= 2) {
        this.count = this.count - 1;
      }
    }
    else {
      setTimeout(() => {
        this.limited = false;
      }, 100);
      this.limited = true;
    }
  }
  addToCard() {
    if (this.productDetails) {
      this.removeToCard = true;
      this.productDetails.Qty = +this.count;
      if (localStorage.getItem('user')) {
        let userstrobj = localStorage.getItem('user');
        let userobj = userstrobj && JSON.parse(userstrobj);
        let userId = userobj[0].id;
        let cardDetailsOfUser: cardData = {
          ...this.productDetails,
          userId,
          productId: this.productDetails.id
        }
        delete cardDetailsOfUser.id
        if (delete cardDetailsOfUser.id) {
          this.service.addToCardWhenUserLoggedIn(cardDetailsOfUser).subscribe((res) => {
            if (res) {
              console.log("Deleted", res);
            } else {
              console.log("falied to delete user");
            }
          })
        }
      } else {
        this.productDetails.Qty = +this.count;
        this.service.addToCardWhenUserNotLoggedIn(this.productDetails)
      }
    }
  }
  removeFromCard(productId: number) {
    this.removeToCard = false;
    let item = localStorage.getItem("addToCard")
    if (item) {
      this.service.removeFromCard(productId);
    }
  }
}