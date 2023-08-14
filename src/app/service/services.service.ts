import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerLogin, SellerSignUp, prodcutAdd } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // isSellerSignedIn = new BehaviorSubject<boolean>(false)
  errorCheck = new EventEmitter<boolean>(false);
  isEmpity = new EventEmitter<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  reloadSave() {
    if (localStorage.getItem('seller')) {
      this.router.navigate(['seller-home'])
    }
  }
  userSignUp(data: SellerSignUp) {
    this.http
      .post(`${environment.apiUrl}/seller-signup`, data)
      .subscribe()
  
  }

  LoginUser(data: SellerLogin) {
    this.http.get(`http://localhost:3000/seller?email=${data.username}&password=${data.password}`,
      { observe: 'response' }).subscribe((reslut: any) => {
        if (reslut && reslut.body.length) {
          localStorage.setItem('seller', JSON.stringify(reslut.body));
          this.router.navigate(['seller-home'])
          this.isLoggedIn.next(true);
        }
        else {
          this.errorCheck.emit(true);
        }
      });
  }
  getUser(){
   return this.http.get(`http://localhost:3000/seller`);
  }
}
