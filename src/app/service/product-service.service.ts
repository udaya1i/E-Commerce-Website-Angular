import { Injectable } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient, private rouer: Router) { }

  addProduct(data: prodcutAdd) {
    this.http.post('http://localhost:3000/addProduct', data).subscribe();
  }

  getProduct() {
    return this.http.get<prodcutAdd>('http://localhost:3000/addProduct')
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/addProduct/${id}`)
  }
  editProduct(data: number) {
    this.rouer.navigateByUrl('seller-update-product')
    
  }
}
