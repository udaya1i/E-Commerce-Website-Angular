import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerSignUp } from '../datatype';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  isSellerSignedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: SellerSignUp) {
    try {
      this.http
        .post('http://localhost:3000/seller', data, { observe: 'response' })


      this.router.navigate(['seller-home'])
      this.isSellerSignedIn.next(true);
    } catch (e) {
      console.log(e);

    }

    return false;



  }

}
