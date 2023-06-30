import { Injectable } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  addProduct(data: prodcutAdd) {
    this.http.post('http://localhost:3000/addProduct', data).subscribe()
    console.log(data)
  }

  getProduct(){
   return this.http.get<prodcutAdd>('http://localhost:3000/addProduct')
  }
}
