import { Injectable } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertmessageService {
  constructor() { }
  invalidEmailAddress() {
    Swal.fire({
      icon: 'warning',
      title: 'Invalid Email Address',
      text: 'Please Check Your Email Address'
  
    })
  }
  alertMessageUserOnSignup() {
    // Swal.fire({
    //   icon: 'success',
    //   text: 'You Can Login Now',
    //   title: 'User Signup Successfully'
    // })
    Swal.fire({
      position: 'center',
      width:'400',
      icon: 'success',
      title: 'User Signup Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
  alertMessageOnSignup() {
    // Swal.fire(
    //   {
    //     icon: 'success',
    //     title: 'Seller Signup Successfuly!!!',
    //     text: 'You can Login Now'

    //   }
    // )
    Swal.fire({
      position: 'center',
      width:'400',
      icon: 'success',
      title: 'Seller Signup Successfuly!!!',
      showConfirmButton: false,
      timer: 1000
    })
  }
  IncorrectCrenditial() {
    Swal.fire(
      {
        icon: 'error',
        title: 'Incorrect Username/Password',
        text: 'Please Enter Correct Username/Password'
      }
    )
  }
  empityCrenditial() {
    Swal.fire({
      icon: 'warning',
      title: 'All Field are Mandatory',
    })
  }
  useStrongPassword() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Use Strong Password',
      text: 'Password Must Contain one number and one special character'
    })
  }
  orderPlaced() {
    Swal.fire({
      title: 'Your Order Is Placed',
      width: 600,
      padding: '3em',
      color: 'green',
      background: '#fff url()',
      backdrop: `
        url("../../assets/ordered.gif")
        left top
        no-repeat
      `
    })
  }
  deleted() {
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Product Deleted Successfully'
    // })
    Swal.fire({
      position: 'center',
      width:'400',
      icon: 'success',
      title: 'Product Deleted Successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }
  productUpdateSuccess() {
    Swal.fire({
      position: 'center',
      width:'400',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    })

  }
  productUpdateFailed() {
    Swal.fire({
      icon: 'error',
      title: 'Product Update Failed'
    })
  }
  productAddSuccessfully() {
    Swal.fire({
      position: 'center',
      width:'400',
      icon: 'success',
      title: 'Product Added',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
