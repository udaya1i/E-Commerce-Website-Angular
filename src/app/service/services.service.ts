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

  // userSignUp(data: SellerSignUp) {
  //   try{
  //   this.http
  //     .post('http://localhost:3000/seller', data, { observe: 'response' })
  //     .subscribe((result) => {
  //       console.log("result", result)
  //       this.router.navigate(['seller-home'])
  //       this.isSellerSignedIn.next(true);
  //     })
  //   } catch(e){
  //     console.log(e);
      
  //   }

  //   return false;

  // }
  async userSignUp(data: SellerSignUp) {
    try {
      const result = await this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).toPromise();
      console.log("result", result);
      this.router.navigate(['seller-home']);
      this.isSellerSignedIn.next(true);
    } catch (error) {
      // Handle error
      console.error(error);
    }
    return false;
  }
  
}
