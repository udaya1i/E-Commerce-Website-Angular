import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerSignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  isSellerSignedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router:Router) { }

  userSignUp(data: SellerSignUp) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe(() => {
        this.router.navigate(['seller-home'])
        this.isSellerSignedIn.next(true);


      })
    return false;

  }
}
