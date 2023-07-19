import { Component, OnInit } from '@angular/core';
import { MyOrderService } from '../service/my-order.service';
import { myorderdata } from '../datatype';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  details: myorderdata[] = [];

  constructor(private serivce: MyOrderService) { }

  ngOnInit(): void {
    this.serivce.getMyOrders().subscribe((res: any) => {
      this.details = res;
      console.log("this is the details ", this.details);
    });
  }
  cancleOrder(id: number | undefined) {
    if (id) {
      this.serivce.cancelOrders(id).subscribe((res) => {
        this.serivce.getMyOrders().subscribe((res: any) => {
          this.details = res;
          console.log("this is the details ", this.details);
        });
      });
    }
  }
}
