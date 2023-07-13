import { Component, OnInit } from '@angular/core';
import { UserLogin, UserSignup, cardData, prodcutAdd } from '../datatype';
import { UserLoginService } from '../service/user-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  constructor(private loginService: UserLoginService, private router: Router) { }
  login: boolean = true;
  isCapital: boolean = false;
  signUpMessage: string = '';
  signUp: boolean = false;
  errorMessage: string = '';
  fieldempityerror: boolean = false;
  username: string = '';
  ngOnInit(): void {
    this.loginService.reloadUserInfo();
  }
  gotoSignUP() {
    this.login = false;
  }
  gotoLogin() {
    this.login = true;
  }
  userSignup(data: UserSignup) {
    if (data.userEmail !== '' && data.userPassword !== '' && data.username !== '') {
      if (data.userEmail.includes('@gmail.com') ||
        data.userEmail.includes('@yahoo.com') ||
        data.userEmail.includes('@protonmail.com')) {
        if (!data.userEmail.startsWith('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
          if (data.username.length >= 4) {
            if (data.userPassword.length > 6) {
              if (data.userPassword.includes('!') ||
                data.userPassword.includes('@') ||
                data.userPassword.includes('#') ||
                data.userPassword.includes('$') ||
                data.userPassword.includes('%') ||
                data.userPassword.includes('^') ||
                data.userPassword.includes('&') ||
                data.userPassword.includes('*') ||
                data.userPassword.includes('(') ||
                data.userPassword.includes(')') ||
                data.userPassword.includes('-') ||
                data.userPassword.includes('+') ||
                data.userPassword.includes('<') ||
                data.userPassword.includes('>') ||
                data.userPassword.includes('?') ||
                data.userPassword.includes('.')
              ) {
                if (
                  data.userPassword.includes('0') ||
                  data.userPassword.includes('1') ||
                  data.userPassword.includes('2') ||
                  data.userPassword.includes('3') ||
                  data.userPassword.includes('4') ||
                  data.userPassword.includes('5') ||
                  data.userPassword.includes('6') ||
                  data.userPassword.includes('7') ||
                  data.userPassword.includes('8') ||
                  data.userPassword.includes('9')) {
                  this.loginService.userSignUp(data);
                  this.signUpMessage = "Signup Successfully!"
                  this.signUp = true;
                  setTimeout(() => {
                    this.signUpMessage = "";
                    this.signUp = false;
                    this.login = true;
                  }, 2000);
                } else {
                  this.errorMessage = 'Password should contain at least one Number!!';
                  setTimeout(() => {
                    this.errorMessage = '';
                  }, 3000);
                }
              } else {
                this.errorMessage = 'Password should contain at least oen special character!!';
                setTimeout(() => {
                  this.errorMessage = '';
                }, 3000);
              }
            } else {
              this.errorMessage = 'Length of password must be more then 6 character!!';
              setTimeout(() => {
                this.errorMessage = '';
              }, 3000);
            }
          } else {
            this.errorMessage = 'Username must has more 4 or more then 4 character!!';
            setTimeout(() => {
              this.errorMessage = '';
            }, 3000);
          }
        } else {
          this.errorMessage = `Email can't start with number!!`
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      } else {
        this.errorMessage = 'Please use valid email address';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    } else {
      this.fieldempityerror = true;

      this.errorMessage = 'All filed are mandatory';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
  }
  userLogin(data: UserSignup) {
    if (data.userEmail && data.userPassword) {
      this.loginService.userLogin(data)
      this.loginService.isLoggedIn.subscribe((res) => {
        if (res) {
          this.moveLocalCardDataToDB();
        }
      })
      this.loginService.isEmpity.subscribe((res) => {
        if (res) {
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
          this.errorMessage = "Incorrect Credentials"
        }
      })
    } else {
      console.log("all field are mandotary");
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
      this.errorMessage = "Please enter you username and password";
    }
  }
  moveLocalCardDataToDB() {
    let localCardData = localStorage.getItem('addToCard');
    if(localCardData){
      let LocallyStoredCardData:prodcutAdd[] = JSON.parse(localCardData)
      let userDatas = localStorage.getItem('user');
      let userFullInfo = userDatas && JSON.parse(userDatas);
      let userId = userFullInfo[0].id;
      LocallyStoredCardData.forEach((cardProduct:prodcutAdd) => {
        let pushItemsToCard: cardData={
          ...cardProduct, 
          productId: cardProduct.id,
          userId: cardProduct.id

        }
      });

      
    }
    let userDetailsOfLocalStorage = localStorage.getItem('user');
    let userObject = userDetailsOfLocalStorage && JSON.parse(userDetailsOfLocalStorage);

    
    
  }
}

