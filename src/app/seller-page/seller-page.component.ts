import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  productLists: prodcutAdd[] = [];


  constructor(private productListService: ProductServiceService) { }

  ngOnInit(): void {
    this.productListService.getProduct().subscribe((result) => {
      if (Array.isArray(result)) {
        this.productLists = result;
        console.log("productsas", this.productLists);
      } else {
        console.log("error");
      }
    });
  }
  deleteProduct() {
    console.log("delete clicked");

  }
  editProduct() {
    console.log("edit clicked");

  }
}
