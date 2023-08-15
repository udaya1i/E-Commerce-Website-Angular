import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AlertmessageService } from '../service/alertmessage.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  productLists: prodcutAdd[] = [];
  message: string | undefined;
  editeds:boolean =  false;
  constructor(private productListService: ProductServiceService,
    private alertService:AlertmessageService,
    private router:Router) { }
  deleteIcom = faTrash;
  editIcon = faEdit;
  ngOnInit(): void {
    this.ProductList();
    console.log("this is test");
    
  }
  deleteProduct(id: number) {
    this.productListService.deleteProduct(id).subscribe((result) => {
      if (result) {
        
        this.alertService.deleted();
        this.ProductList();
      }
    })
  }
  getProductById(id: number,) {
   let test =  this.productListService.getProductById(id);
    
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
