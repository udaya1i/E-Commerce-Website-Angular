import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cardData, myorderdata, prodcutAdd } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class MyOrderService {
  cardItem = new EventEmitter<prodcutAdd[] | []>();
  constructor(private http: HttpClient) { }
  myOrder(data: any) {
    return this.http.post(`http://localhost:3000/myOrder`, data);
  }
  getMyOrders() {
    let userDetailsString = localStorage.getItem('user');
    let userDetailsObj = userDetailsString && JSON.parse(userDetailsString);
    let userId = userDetailsObj[0].id;
    return this.http.get<myorderdata>(`http://localhost:3000/myOrder?userId=${userId}`);
  }
  getProducts() {
    return this.http.get(`http://localhost:3000/addProduct`)
  }
  deleteProduc(id:number){
    return this.http.delete(`http://localhost:3000/cardDataOfUser/${id}`, {observe:'response'})
    .subscribe((res)=>{
      if(res){
        this.cardItem.emit([])
      }
    })
  }
}
