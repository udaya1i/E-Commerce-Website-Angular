import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin, UserSignup } from '../datatype';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){
    if(localStorage.getItem('user')){
        this.router.navigate(['/'])
    }
  }

  userSignUp(data: UserSignup) {
    return this.http.post(`http://localhost:3000/userSign-up`, data).subscribe();
  }


  userLogin(data: UserLogin) {
    this.http.get(`http://localhost:3000/userSign-up?email=${data.userEmail}&password=${data.userPassword}`, { observe: 'response' })
      .subscribe((reslut) => {
        if (reslut) {
          localStorage.setItem('user', JSON.stringify(reslut.body))
          this.router.navigate(['/']);
          console.log("called");

        }
      });
  }
}
