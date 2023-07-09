import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin, UserSignup } from '../datatype';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
   
  }

  userSignUp(data: UserSignup) {
    return this.http.post(`http://localhost:3000/userSign-up`, data).subscribe();
  }


  userLogin(data: UserSignup) {
    this.http.get(`http://localhost:3000/userSign-up?userEmail=${data.userEmail}&userPassword=${data.userPassword}`, {observe:'response'})
    .subscribe((res:any)=>{
      if(res && res.body.length ){
        console.log("called");
        
        localStorage.setItem('user', res.body);
        
      } else{
        console.log("data not found");
        
      }     
    })
  }
}
