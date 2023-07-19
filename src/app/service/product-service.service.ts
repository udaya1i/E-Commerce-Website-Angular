import { EventEmitter, Injectable } from '@angular/core';
import { cardData, prodcutAdd } from '../datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  cardItem = new EventEmitter<prodcutAdd[] | []>();
  // dbCardItem = new EventEmitter<any>();
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
    return this.http.get<prodcutAdd>(`http://localhost:3000/addProduct/${id}`);
  }
  getPopularProduct() {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?_limit=5`);
  }
  getTopProducts() {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?_limit=102`);
  }
  searchProduct(search: string) {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?q=${search}`)
  }
  searchProductByProductName(product: string) {
    return this.http.get<prodcutAdd[]>(`http://localhost:3000/addProduct?q=${product}`)
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
    return this.http.post(`http://localhost:3000/cardDataOfUser`, addToCardData);
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
    return this.http.get<[]>(`http://localhost:3000/cardDataOfUser`);
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