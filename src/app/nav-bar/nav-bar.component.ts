import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { prodcutAdd } from '../datatype';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userType: string = 'defalut';
  sellerName: string = '';
  userLogin: string = '';
  UserNames: string = '';
  productSearch: undefined | prodcutAdd[];
  cardItems: number = 0;
  dbCardItems:number = 0;

  constructor(private productService: ProductServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        // console.log("this is test", value.url);
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          this.userType = 'seller';
          if (localStorage.getItem('seller')) {
            let userData = localStorage.getItem('seller');
            let userName = userData && JSON.parse(userData)[0];
            this.sellerName = userName.name;
          }
        }
        else if (localStorage.getItem('user')) {
          this.userType = 'user';
          if (localStorage.getItem('user')) {
            let LoginUserData = localStorage.getItem('user');
            let LoginUserName = LoginUserData && JSON.parse(LoginUserData);
            this.UserNames = LoginUserName[0].username;
          }
        }
        else {
          this.userType = 'defalut';
        }
      }
    });
    let countitems = localStorage.getItem('addToCard');
    if (countitems) {
      this.cardItems = JSON.parse(countitems).length
    }
    this.productService.cardItem.subscribe((res)=>{
        this.cardItems = res.length;      
    });
    this.productService.dbCardItem.subscribe((res)=>{
      this.dbCardItems = res.length;
    })
  }
  searchProduct(search: KeyboardEvent) {
    const element = search.target as HTMLInputElement;
    this.productService.searchProduct(element.value).subscribe((reslut) => {
      reslut.length = 4;
      this.productSearch = reslut;
      // console.log(reslut);
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
  logOutSeller() {
    localStorage.removeItem('seller');
  }
  userLogOut() {
    localStorage.removeItem('user');
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 1);
    this.router.navigate(['/user'])
  }
}