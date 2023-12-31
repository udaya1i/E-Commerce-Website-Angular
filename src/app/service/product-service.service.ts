import { EventEmitter, Injectable } from '@angular/core';
import { cardData, prodcutAdd } from '../datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  cardItem = new EventEmitter<prodcutAdd[] | []>();
  constructor(private http: HttpClient, private rouer: Router) { }
  addProduct(data: prodcutAdd) {
   return this.http.post(`${environment.apiUrl}/add-new-product`, data);
  }
  getProduct() {
    return this.http.get<prodcutAdd>(`${environment.apiUrl}/get-all-product`);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrl}/delete-product/${id}`);
  }
  updateProduct(id:any, data:any) {
    return this.http.put<prodcutAdd>(`${environment.apiUrl}/update-product/${id}`, data);
  }
  getProductById(id: any) {
    return this.http.get<prodcutAdd>(`${environment.apiUrl}/get-Product-by-id/${id}`);
  }
  getPopularProduct() {
    return this.http.get<prodcutAdd[]>(`${environment.apiUrl}/get-all-product`);
  }
  getTopProducts() {
    return this.http.get<prodcutAdd[]>(`${environment.apiUrl}/get-all-product`);
  }
  searchProduct(search: string) {
    return this.http.get<prodcutAdd[]>(`${environment.apiUrl}/get-product-by-name/${search}`)
  }
  searchProductByProductName(productname: string) {
    return this.http.get<prodcutAdd[]>(`${environment.apiUrl}/get-product-by-name/${productname}`)
  }
  addToCardWhenUserNotLoggedIn(newData: prodcutAdd) {
    let addMoreDataInLocalStorage = [];
    let dataAvailableInLocalStorage = localStorage.getItem('addToCard')
    if (dataAvailableInLocalStorage) {
      addMoreDataInLocalStorage = JSON.parse(dataAvailableInLocalStorage)
      addMoreDataInLocalStorage.push(newData);
      localStorage.setItem('addToCard', JSON.stringify(addMoreDataInLocalStorage));
    } else {
      localStorage.setItem('addToCard', JSON.stringify([newData]));
      this.cardItem.emit([newData])
    }
    this.cardItem.emit(addMoreDataInLocalStorage)
  }
  addToCardWhenUserLoggedIn(addToCardData: cardData) {
    return this.http.post(`${environment.apiUrl}/post-card-data`, addToCardData);
  }
  removeFromCard(removeProductId: number) {
    let removeItemsFromCard = localStorage.getItem('addToCard');
    if (removeItemsFromCard) {
      let rawJson: prodcutAdd[] = JSON.parse(removeItemsFromCard);
      let filterIt = rawJson.filter((eg: prodcutAdd) => removeProductId !== eg.id);
      localStorage.setItem('addToCard', JSON.stringify(filterIt));
      this.cardItem.emit(filterIt)
    }
  }
  getCardInformation() {
    return this.http.get<[]>(`${environment.apiUrl}/get-card-data`);
  }
  removeFromUserCard(id: any) {
    return this.http.delete(`http://localhost:3000/cardDataOfUser/${id}`);
  }
  getCardInformationOfUser(id: number) {
    return this.http.get<cardData[]>(`http://localhost:3000/cardDataOfUser?userId=${id}`);
  }
  getCardListOfUser(userId: number) {
    this.http.get<prodcutAdd[]>(`http://localhost:3000/cardDataOfUser?userId=` + userId, { observe: 'response' })
      .subscribe((res) => {
        if (res && res.body) {
          let items = res.body;
          this.cardItem.emit(items)
        } else {
          console.log("There is no item in card");
        }
      });
  }
  deleteProductFromCard(id: number) {
    return this.http.delete(`http://localhost:3000/cardDataOfUser/${id}`);
  }
  deleteProduc(id: number) {
    return this.http.delete(`http://localhost:3000/cardDataOfUser/${id}`, { observe: 'response' })
      .subscribe((res) => {
        if (res) {
          this.cardItem.emit([])
        }
      })
  }
} 