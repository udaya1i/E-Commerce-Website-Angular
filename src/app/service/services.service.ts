import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerLogin, SellerSignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // isSellerSignedIn = new BehaviorSubject<boolean>(false)
  errorCheck = new EventEmitter<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SellerSignUp) {
    try {
      this.http
        .post('http://localhost:3000/seller', data, { observe: 'response' })
        .subscribe((result) => {
          window.alert("Seller Sign Up Successfully");
        })
    } catch (e) {
      console.log(e);
    }
  }
  reloadSave() {
    if (localStorage.getItem('seller')) {
      this.router.navigate(['seller-home'])
    }
  }
  LoginUser(data: SellerLogin) {
    this.http.get(`http://localhost:3000/seller?email=${data.username}&password=${data.password}`,
      { observe: 'response' }).subscribe((reslut: any) => {
        if (reslut && reslut.body.length) {
          localStorage.setItem('seller', JSON.stringify(reslut.body));
          window.alert("Welcome!");
          this.router.navigate(['seller-home'])
          this.isLoggedIn.next(true);
        } else {
          this.errorCheck.emit(true);
        }
      })
  }
}
