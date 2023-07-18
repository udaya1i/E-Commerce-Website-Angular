import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  details: any;
  name:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(tes: any) {
   
  }
}
