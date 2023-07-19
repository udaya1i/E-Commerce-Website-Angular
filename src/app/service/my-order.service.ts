import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyOrderService {

  constructor(private http:HttpClient) { }
  myOrder(data:any){
  return this.http.post(`http://localhost:3000/myOrder`,data);
  } 
}

