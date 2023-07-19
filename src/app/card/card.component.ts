import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { cardData, prodcutAdd, totalprice } from '../datatype';
import { defaultIfEmpty } from 'rxjs';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  productDetails: cardData[] = [];
  cardData:any;
  priceDetails: totalprice = {
    price: 0,
    tax: 0,
    discount: 0,
    delivery: 0,
    total: 0
  }
  constructor(private service: ProductServiceService, private router:Router) { }
  ngOnInit(): void {
    let uidObj = localStorage.getItem('user');
    if (uidObj) {
      let UID = JSON.parse(uidObj)
      // let userId = UID[0].id;
      this.service.getCardInformation().subscribe((res: cardData[]) => {
        if (res) {
          this.productDetails = res;
          let price = 0 ;
          // console.log("test", res);
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
              this.router.navigate(['/product-details/productDetails.id'])
            }
          });
        }
      });
    }
  }
  exprotToExcel(){
    let docTitle = `MyCard.xlsx`;
    this.cardData = [];
    for (let i = 0; i < this.productDetails.length; i++) {
      this.cardData.push({
        "S.N.": i + 1,
        "Product Name": this.productDetails[i]["productName"],
        "Product Catagory": this.productDetails[i]["productCatagory"],
        "Product Color":  this.productDetails[i]["productColor"],
        "Product Image": this.productDetails[i]["productImage"],
        "Price": this.productDetails[i]["productPrice"],
        "User Id": this.productDetails[i]["userId"],
        "Qty":this.productDetails[i]["Qty"]
      });
    }
    
    try {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cardData);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, docTitle);
    } catch (err) {
      console.error("export error", err);
    }
    console.log("tst", this.productDetails);
    
  }
  // ordernow(){
   // this.router.navigate('buy-product');
  //   console.log("test");
    
  // }
}

