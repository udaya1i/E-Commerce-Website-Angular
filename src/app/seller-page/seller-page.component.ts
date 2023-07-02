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
  message: string | undefined;


  constructor(private productListService: ProductServiceService) { }

  ngOnInit(): void {
    // this.productListService.getProduct().subscribe((result) => {
    //   if (Array.isArray(result)) {
    //     this.productLists = result;
    //     console.log("productsas", this.productLists);
    //   } else {
    //     console.log("error");
    //   }
    // });
    this.ProductList();
  }
  deleteProduct(id: number) {
    this.productListService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.message = "Product Deleted Successfully";
        this.ProductList();
      }
      setTimeout(() => {
        this.message = '';
      }, 3000);

    })

  }
  editProduct(id: number) {
    console.log("edit clicked");

  }
  ProductList() {
    this.productListService.getProduct().subscribe((result) => {
      if (Array.isArray(result)) {
        this.productLists = result;
        console.log("productsas", this.productLists);
      } else {
        console.log("error");
      }
    });
  }
}
