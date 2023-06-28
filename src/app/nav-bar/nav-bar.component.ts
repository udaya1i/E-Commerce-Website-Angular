import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userType: string = 'defalut';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          console.log("inside seller");
          this.userType = 'seller';
        }
        else {
          console.log("outside seller")
          this.userType = 'defalut';
        }
      }
    })
  }
  logOut() {
    localStorage.clear()
  }

}
