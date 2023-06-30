import { Component, OnInit } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-seller-product-add',
  templateUrl: './seller-product-add.component.html',
  styleUrls: ['./seller-product-add.component.css']
})
export class SellerProductAddComponent implements OnInit {

  constructor(private  service:ServicesService) { }

  ngOnInit(): void {
  }

  productAdd(data:prodcutAdd){
    console.log(data);
    this.service.addProduct(data);
    
  }

}
