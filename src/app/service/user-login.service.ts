import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin, UserSignup } from '../datatype';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http:HttpClient) { }
  userSignUp(data:UserSignup){
    return this.http.post(`http://localhost:3000/userSign-up`, data).subscribe();
  }
  userLogin(data:UserLogin){
    this.http.get(`http://localhost:3000/userSign-up?email=${data.userEmail}&password=${data.userPassword}`, {observe:'response'})
    .subscribe((reslut)=>{
      if(reslut){
        localStorage.setItem('user',JSON.stringify(reslut.body))
        console.log("this is result", reslut);
      }
    })
  }
}
