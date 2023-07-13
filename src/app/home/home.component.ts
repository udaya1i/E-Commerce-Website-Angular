import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProduct:undefined|prodcutAdd[];
  allProducts:undefined |prodcutAdd[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getCardItem();
    this.productService.getPopularProduct().subscribe((result)=>{
      console.log("This is the list of popular products",result);
      this.popularProduct = result;
    });

    this.productService.getTopProducts().subscribe((products)=>{
      this.allProducts = products;
    })
  }

}
