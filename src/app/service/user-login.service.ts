import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { UserLogin, UserSignup } from '../datatype';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isEmpity = new EventEmitter<boolean>(false);
  isLoggedIn = new EventEmitter<boolean>(false)

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
       localStorage.setItem('user', res.body);    
        this.router.navigate(['/']);
        this.isLoggedIn.next(true)
      } else{
        console.log("data not found");
        this.isEmpity.next(true);
      }     
    })
  }
}
