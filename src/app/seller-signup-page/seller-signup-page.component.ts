import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-seller-signup-page',
  templateUrl: './seller-signup-page.component.html',
  styleUrls: ['./seller-signup-page.component.css']
})
export class SellerSignupPageComponent implements OnInit {

   datas:any=[];

  constructor(private services:ServicesService) { }

  ngOnInit(): void {
  }

  signup(data:Object){
    console.log(data)
    this.services.userSignUp()
    
    
   
  }

}
