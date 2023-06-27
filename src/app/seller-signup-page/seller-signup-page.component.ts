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
  constructor(private ser: ServicesService, private router:Router) { }
  showLogin=false;
  checkError:string = '';
 ngOnInit():void{
  if(localStorage.getItem('seller')){
    // this.router.navigate(['seller-home'])
    // this.ser.reloadSave();
  }
  this.ser.reloadSave();
}
  signUp(data:SellerSignUp):void{
     this.ser.userSignUp(data)
    //  this.ser.reloadSave();

  }
  openLogin(){
    this.showLogin=true;
  }
  Login(logdata:SellerSignUp){
    console.log(logdata)
  }
  openSignUp(){
    this.showLogin=false;
  }
  LoginUser(data:SellerLogin){
    this.checkError = "";
      this.ser.LoginUser(data);
      this.ser.reloadSave();
      this.ser.errorCheck.subscribe((check)=>{
        if(check){
          this.checkError = "Username/Password Incorrect";
        }
      })
    }
}





