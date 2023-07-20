import { Component, OnInit } from '@angular/core';
import { MyOrderService } from '../service/my-order.service';
import { myorderdata } from '../datatype';
import { AlertmessageService } from '../service/alertmessage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  details: myorderdata[] = [];

  constructor(private serivce: MyOrderService,
    private message:AlertmessageService) { }

  ngOnInit(): void {
    this.serivce.getMyOrders().subscribe((res: any) => {
      this.details = res;
      console.log("this is the details ", this.details);
    });
  }
  // cancleOrder(id: number | undefined) {
  //   if (id) {

  //     this.serivce.cancelOrders(id).subscribe((res) => {
  //       this.serivce.getMyOrders().subscribe((res: any) => {
  //         this.details = res;
  //         console.log("this is the details ", this.details);
  //         this.message.productDeleted();
  //       });
  //     });
  //   }
  // }
// ...

cancleOrder(id: number | undefined) {
  if (id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serivce.cancelOrders(id).subscribe((res) => {
          this.serivce.getMyOrders().subscribe((res: any) => {
            this.details = res;
            this.message.deleted();
            // console.log("this is the details ", this.details);
            // this.message.productDeleted();
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }
}

}
