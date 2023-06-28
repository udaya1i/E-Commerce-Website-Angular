import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userType: string = 'defalut';
  sellerName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          // console.log("inside seller");
          this.userType = 'seller';
          if(localStorage.getItem('seller')){
            let userData = localStorage.getItem('seller');
            let userName = userData && JSON.parse(userData)[0];
            this.sellerName = userName.name;
            console.log(this.sellerName)
          }
        }
        else {
          // console.log("outside seller")
          this.userType = 'defalut';
        }
      }
    })
  }
  logOut() {
    localStorage.removeItem('seller')

  }
}
