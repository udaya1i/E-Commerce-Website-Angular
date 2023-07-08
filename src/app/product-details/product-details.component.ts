import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  count: number = 1;
  limited:boolean = false;
  productDetails: prodcutAdd | undefined;
  constructor(private activeRouter: ActivatedRoute, private service: ProductServiceService) { }
  ngOnInit(): void {
    let pid = this.activeRouter.snapshot.paramMap.get('details');
    console.log("the id of the product is ", pid);
    pid && this.service.getProductById(pid).subscribe((result) => {
      console.log(result);
      this.productDetails = result;
    })
  }
  qty(action: string) {
    if (action === 'add' && this.count <=4) {
      this.count = this.count + 1;
    } else if (action === 'remove') {
      if (this.count >= 2) {
        this.count = this.count - 1;
      }
    }
    else{
     setTimeout(() => {
      this.limited = false;
     }, 100);      
     this.limited = true;

    }
  }

}
