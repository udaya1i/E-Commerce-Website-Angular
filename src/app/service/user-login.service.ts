import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { UserLogin, UserSignup } from '../datatype';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isEmpity = new EventEmitter<boolean>(false);
  isLoggedIn = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
  reloadUserInfo() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])
    }
  }
  userSignUp(data: UserSignup) {
    return this.http.post(`${environment.apiUrl}/user-register`, data).subscribe();
  }
  userLogin(data: UserSignup) {
    this.http.get(`http://localhost:3000/userSign-up?userEmail=${data.userEmail}&userPassword=${data.userPassword}`, { observe: 'response' })
      .subscribe((res: any) => {
        if (res && res.body.length) {
          localStorage.setItem('user', JSON.stringify(res.body));
          this.router.navigate(['/']);
          console.log("User Login Successfully");
          this.isLoggedIn.emit(true);
        } else {
          console.log("Incorrect Crenditial");
          this.isEmpity.emit(true);
        }
      });
  }
}
