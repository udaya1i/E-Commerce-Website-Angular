import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerSignUp } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }

  userSignUp(data:SellerSignUp){
  return this.http.post('http://localhost:3000/seller',data)    
  }
}
