import { Component, OnInit } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { ServicesService } from '../service/services.service';
import { ProductServiceService } from '../service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-product-add',
  templateUrl: './seller-product-add.component.html',
  styleUrls: ['./seller-product-add.component.css']
})
export class SellerProductAddComponent implements OnInit {
  productAdded: boolean = false;
  dataNotFound: boolean = false;

  constructor(private service: ProductServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  productAdd(data: prodcutAdd) {
    this.dataNotFound = false,
      this.productAdded = false
    if ( data.productImage.length>=1 && data.productName.length >= 1 && data.description.length >= 1 &&
      data.productPrice.length >= 1 && data.productCatagory.length >= 1 && data.productColor.length >= 1) {
      this.service.addProduct(data);
      this.productAdded = true;
      setTimeout(() => {
        this.productAdded = false;
        this.router.navigate(['seller-home'])
        
      }, 2000);
    }
    else {
      this.dataNotFound = true;
      setTimeout(() => {
        this.dataNotFound = false
      }, 5000);

    }

  }
}
