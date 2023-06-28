import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerLogin, SellerSignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // isSellerSignedIn = new BehaviorSubject<boolean>(false)
  errorCheck = new EventEmitter<boolean>(false);
  isEmpity = new EventEmitter<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  reloadSave() {
    if (localStorage.getItem('seller')) {
      this.router.navigate(['seller-home'])
    }
  }
  userSignUp(data: SellerSignUp) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
      })
  //   this.http.get('http://localhost:3000/seller').subscribe((reslut) => {
  //     console.log(reslut)
  //   })

//     this.http.get('http://localhost:3000/seller').subscribe((result:any)=>{
//   // const availableData = result.find((check:SellerLogin)=> check.username ===result.); 
//   //   if(availableData){
//   //     console.log("data already exist in dtabase");
//   //   }
// } else {
//   this.http
//     .post('http://localhost:3000/seller', data, { observe: 'response' })
//     .subscribe((response) => {
//       console.log('Data saved in the JSON server');
//     });
// }
// });
//   console.log();
  
// })
}






  LoginUser(data: SellerLogin) {
    this.http.get(`http://localhost:3000/seller?email=${data.username}&password=${data.password}`,
      { observe: 'response' }).subscribe((reslut: any) => {
        if (reslut && reslut.body.length) {
          localStorage.setItem('seller', JSON.stringify(reslut.body));
          this.router.navigate(['seller-home'])
          this.isLoggedIn.next(true);
        }
        else {
          this.errorCheck.emit(true);
        }
      });
  }
}
