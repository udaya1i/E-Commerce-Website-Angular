import { Component, OnInit } from '@angular/core';
import { MyOrderService } from '../service/my-order.service';
import { myorderdata } from '../datatype';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  details:myorderdata[] = [];

  constructor(private serivce:MyOrderService) { }

  ngOnInit(): void {
    this.serivce.getMyOrders().subscribe((res:any)=>{
      this.details = res;
      console.log("this is the details ", this.details);
    });
  }
  // cancelOrder(id:number){
  //   this.serivce.deleteProduct(id).subscribe((res)=>{
  //       console.log("user deleted successfully", res);
        
  //   });
   
  // }
}
