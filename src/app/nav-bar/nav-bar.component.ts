import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userType: string = 'defalut';
  sellerName: string = '';
  productSearch: undefined | prodcutAdd[];

  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          this.userType = 'seller';
          if (localStorage.getItem('seller')) {
            let userData = localStorage.getItem('seller');
            let userName = userData && JSON.parse(userData)[0];
            this.sellerName = userName.name;
          }
        }
        else {
          this.userType = 'defalut';
        }
      }
    })
  }
  logOut() {
    localStorage.removeItem('seller')
  }
  searchProduct(search: KeyboardEvent) {
    const element = search.target as HTMLInputElement;
    this.productService.searchProduct(element.value).subscribe((reslut) => {
      reslut.length = 4;
      this.productSearch = reslut;
      console.log(reslut);
    });
  }
  clearData() {
    this.productSearch = undefined;
  }
  submit(data: string) {
    if (data) {
      this.router.navigate([`search-product/${data}`]);
    }
  }
}
