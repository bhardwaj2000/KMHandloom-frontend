import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kmorder } from './kmorder';
import { KmserviceService } from './kmservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  kmorder?:Kmorder[];
  constructor(private kmservice:KmserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder(){
    this.kmservice.getAllOrders().subscribe(
      data=>{
        console.log(data);
        this.kmorder=data;
      }
    );
  }
  updateItem(id?:number){
    console.log("id : "+id);
    this.kmservice.getId(id);
    this.route.navigate(['update-orders']);
   
  }
  deleteItem(id?:number){
    this.kmservice.deleteOrderById(id).subscribe();
    this.route.navigate(['orders']);
    window.location.reload();
  }

}
