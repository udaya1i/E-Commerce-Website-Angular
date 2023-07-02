import { Injectable } from '@angular/core';
import { prodcutAdd } from '../datatype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

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
    this.http.put(`http://localhost:3000/addProduct/${id}`,data).subscribe((result)=>{
      
    })
  }
}
