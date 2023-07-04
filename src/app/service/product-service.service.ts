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
    return this.http.get<prodcutAdd>('http://localhost:3000/addProduct');
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/addProduct/${id}`);
  }

  updateProduct(product: prodcutAdd) {
    return this.http.put<prodcutAdd>(`http://localhost:3000/addProduct/${product.id}`, product);
  }

  getProductById(id: string) {
    return this.http.get(`http://localhost:3000/addProduct/${id}`);
  }

  getPopularProduct() {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?_limit=3`);
  }
  getTopProducts() {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?_limit=12`);
  }
  searchProduct(search: string) {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?q=${search}`)
  }
  searchProductByProductName(product:string){
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?q=${product}`)
  }
}
