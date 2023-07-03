import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';
import { faTrash, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  productLists: prodcutAdd[] = [];
  message: string | undefined;
  editeds:boolean =  false;


  constructor(private productListService: ProductServiceService, private router:Router) { }
  deleteIcom = faTrash;
  editIcon = faPenAlt;


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
    this.productListService.editProduct(id);
  }
  ProductList() {
    this.productListService.getProduct().subscribe((result) => {
      if (Array.isArray(result)) {
        this.productLists = result;
      } else {
        console.log("error");
      }
    });
  }
}
