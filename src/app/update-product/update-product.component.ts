import { Component, OnInit } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { ProductServiceService } from '../service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productDataById: prodcutAdd | any;
  constructor(private routerService: Router, private updateService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');

    productId && this.updateService.getProductById(productId).subscribe((result) => {
      this.productDataById = result;
      console.log(this.productDataById, result);


    })


  }
  updateProduct(id: prodcutAdd) {
    console.log("this is data",id);
    if(this.productDataById){
      id.id = this.productDataById.id;
    }
    this.updateService.updateProduct(id).subscribe((result)=>{
  
      if(result){
        console.log("Product Updated Successfully");
        this.routerService.navigate(['seller-home'])
      }
      else{
        console.log("Product update failed!!!");
        
      }
    })
}

}
