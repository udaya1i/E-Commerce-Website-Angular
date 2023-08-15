import { Component, OnInit } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { ProductServiceService } from '../service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertmessageService } from '../service/alertmessage.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productDataById: prodcutAdd | any;
  updateMessage:string='';
  constructor(private routerService: Router, 
    private updateService: ProductServiceService, 
    private route: ActivatedRoute,
    private alertService: AlertmessageService,
    private productService:ProductServiceService) { }
  ngOnInit(): void {
    // let productId = this.route.snapshot.paramMap.get('id');
    // productId && this.updateService.getProductById(productId).subscribe((result) => {
    //   this.productDataById = result;
    //   console.log(this.productDataById, result);
    // })
    let productId = this.route.snapshot.paramMap.get('id');
    console.log("this is id", productId);
    let product =  this.productService.getProductById(productId);
    console.log("this is product", product);
    
    
    
  }
  updateProduct(id: prodcutAdd) {``
    // if(this.productDataById){
    //   id.id = this.productDataById.id;
    // }
    // this.updateService.updateProduct(id, "test").subscribe((result)=>{
    //   if(result){
    //     this.alertService.productUpdateSuccess();
    //     setTimeout(() => {
    //       this.routerService.navigate(['seller-home']);
    //     }, 1000);
    //   }
    //   else{
    //     this.alertService.productUpdateFailed();
    //   }
    // })
}

}
 