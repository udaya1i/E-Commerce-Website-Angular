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
  updateMessage:string='';
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
        this.updateMessage = "Product Update Successfully!!"
        setTimeout(() => {
          this.routerService.navigate(['seller-home']);
        }, 1000);
        console.log("Product Updated Successfully");
      }
      else{
        console.log("Product update failed!!!");
        
      }
    })
}

}
