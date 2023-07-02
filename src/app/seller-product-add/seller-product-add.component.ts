import { Component, OnInit } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { ServicesService } from '../service/services.service';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-seller-product-add',
  templateUrl: './seller-product-add.component.html',
  styleUrls: ['./seller-product-add.component.css']
})
export class SellerProductAddComponent implements OnInit {
  showdetails: boolean = false;
  dataNotFound: boolean = false;

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
  }

  productAdd(data: prodcutAdd) {
    this.dataNotFound = false,
      this.showdetails = false
    if (data.productName.length >= 1 && data.description.length >= 1 &&
      data.productPrice.length >= 1 && data.productCatagory.length >= 1 && data.productColor.length >= 1) {
      this.service.addProduct(data);
      this.showdetails = true;
      console.log("this is the length", data.description.length);
      setTimeout(() => {
        this.showdetails = false;
      }, 5000);
    }
    else {
      this.dataNotFound = true;
      setTimeout(() => {
        this.dataNotFound = false
      }, 5000);

    }

  }
}
