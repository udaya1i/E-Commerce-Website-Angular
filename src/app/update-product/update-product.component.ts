import { Component, OnInit } from '@angular/core';
import { prodcutAdd } from '../datatype';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editProduct(data: prodcutAdd) {
    
    console.log(data);
    
    
  }
}
