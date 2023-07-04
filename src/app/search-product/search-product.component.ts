import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  searchedData:undefined|prodcutAdd[];

  constructor(private route:ActivatedRoute, private service:ProductServiceService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('product');
    productId && this.service.searchProductByProductName(productId).subscribe((dta)=>{
    this.searchedData = dta;        
    });
  }

}
