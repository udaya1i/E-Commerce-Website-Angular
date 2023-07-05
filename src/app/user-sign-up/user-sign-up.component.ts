import { Component, OnInit } from '@angular/core';
import { SellerLogin, SellerSignUp } from '../datatype';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  gotoLogin:boolean = false;
  constructor() { }
 
  ngOnInit(): void {}
  clicked(){
    this.gotoLogin = true;
  }

}
