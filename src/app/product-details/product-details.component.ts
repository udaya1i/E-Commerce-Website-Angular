import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { cardData, prodcutAdd } from '../datatype';
import { trigger } from '@angular/animations';
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
  productId: prodcutAdd | undefined;
  isUserLoggedIn:boolean = false;
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
    let isUser = localStorage.getItem('user');
    if (isUser) {
      this.isUserLoggedIn = true;
      let userObj = JSON.parse(isUser);
      let userid = userObj[0].id;
      this.service.getCardListOfUser(userid);
    }
    this.service.cardItem.subscribe((res) => {
      let cardItemss = res.filter((res: prodcutAdd) => pid?.toString() === res.id.toString())
      if (cardItemss.length && cardItemss) {
        this.removeToCard = true;
        this.productId = res[0];
      } else {
        this.removeToCard = false;
      }
    });

  }
  qty(action: string) {
    if (action === 'add' && this.count <= 19) {
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
      this.productDetails.Qty = +this.count;
      if (localStorage.getItem('user')) {
        let userstrobj = localStorage.getItem('user');
        let userobj = userstrobj && JSON.parse(userstrobj);
        let userId = userobj[0].id;
        let cardDetailsOfUser: cardData = {
          ...this.productDetails,
          userId,
          productId: this.productDetails.id,
        }
        this.service.addToCardWhenUserLoggedIn(cardDetailsOfUser).subscribe((res) => {
          if (res) {
            this.service.getCardListOfUser(userId);
            this.removeToCard = true;
          }
        });
      } else {
        this.productDetails.Qty = +this.count;
        this.service.addToCardWhenUserNotLoggedIn(this.productDetails)
      }
    }
  }
  removeFromCard(productId: number) {
    if (!localStorage.getItem('user')) {
      this.removeToCard = false;
      let item = localStorage.getItem("addToCard")
      if (item) {
        this.service.removeFromCard(productId);
      }
    } else {
      let useridd = 0;
      let ids = localStorage.getItem('user');
      if (ids) {
        let UId = JSON.parse(ids);
        let userId = UId[0].id
        useridd = userId;
      }
      let id = this.productId?.id;
      id && this.service.removeFromUserCard(id).subscribe((res) => {
        this.service.getCardListOfUser(useridd);
        this.removeToCard = true;
      });
    }
  }
}