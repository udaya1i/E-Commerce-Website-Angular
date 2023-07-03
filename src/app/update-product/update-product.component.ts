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

  productDataById: prodcutAdd | undefined;
  constructor(private routerService: Router, private updateService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let pid: any = this.route.snapshot.paramMap.get('id');
    console.log("this is id",pid);
    this.updateService.getProductById(pid).subscribe((res)=>{
      this.productDataById = res;
      console.log("this is something",res);
    })

  }
  updateProduct(id: prodcutAdd) {
    
  }

}
