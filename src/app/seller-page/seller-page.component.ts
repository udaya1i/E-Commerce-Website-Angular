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

  public productLists:prodcutAdd|undefined;

  constructor(private productListService:ProductServiceService) { }

  ngOnInit(): void {
   this.productListService.getProduct().subscribe((result)=>{
  this.productLists = result;    
  console.log("test",this.productLists);

   })
   console.log(this.productLists);
   
    
  }

  // getAllProduct(){
  //   console.log("testing");
    
  //   console.log(this.productLists);
  //   console.log("testing");
    
    
  // }


}
