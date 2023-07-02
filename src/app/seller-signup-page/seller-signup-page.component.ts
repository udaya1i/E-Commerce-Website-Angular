import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { SellerLogin, SellerSignUp } from '../datatype';

@Component({
  selector: 'app-seller-signup-page',
  templateUrl: './seller-signup-page.component.html',
  styleUrls: ['./seller-signup-page.component.css']
})
export class SellerSignupPageComponent implements OnInit {
  constructor(private ser: ServicesService, private router: Router) { }
  showLogin = false;
  clickedSignup = false;
  empity: string = '';

  checkError: string = "";
  ngOnInit(): void {
    if (localStorage.getItem('seller')) {
    }
    this.ser.reloadSave();
  }
  signUp(data: SellerSignUp): void {
    if (data.email.length >= 1 && data.name.length >= 1 && data.password.length >= 1) {
      this.ser.userSignUp(data)
      this.clickedSignup = true;
    } else {
      this.empity = "Please fill in all the required fields";

      setTimeout(() => {
        this.empity = "";
      }, 2000);
    }
  }

  openLogin() {
    this.showLogin = true;
  }
  Login(logdata: SellerSignUp) {
    console.log(logdata)
  }
  openSignUp() {
    this.showLogin = false;
  }

  LoginUser(data: SellerLogin) {
    this.checkError = "";
    this.ser.LoginUser(data);
    this.ser.reloadSave();
    this.ser.errorCheck.subscribe((check) => {
      if (check) {
        this.checkError = "Username/Password Incorrect";
      }
    })
  }
}





