import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { SellerSignUp } from '../datatype';

@Component({
  selector: 'app-seller-signup-page',
  templateUrl: './seller-signup-page.component.html',
  styleUrls: ['./seller-signup-page.component.css']
})
export class SellerSignupPageComponent implements OnInit {
  constructor(private ser: ServicesService, private router:Router) { }
  ngOnInit(): void {
  }
  signUp(data:SellerSignUp):void{
    this.ser.userSignUp(data).subscribe((response)=>{
      if(response){
        this.router.navigate(['seller-home'])
      }
    })
  }
}

