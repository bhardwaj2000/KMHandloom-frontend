import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kmorder } from '../orders/kmorder';
import { KmserviceService } from '../orders/kmservice.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  kmorder:Kmorder=new Kmorder();
  updateItems=new FormGroup({
    item: new FormControl('',[Validators.required]),
    buyer:new FormControl('',[Validators.required])
  })
  constructor(private kmservice:KmserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getOrderById();
  }

 
  get item(){
    return this.updateItems.get('item');
  }
  get buyer(){
    return this.updateItems.get('buyer');
  }
  getOrderById(){
    this.kmservice.getOrderById().subscribe(data=>{
      this.kmorder=data;
    })
  }
  updateOrder(id?:number){
    console.log(this.kmorder);
    this.kmservice.updateOrderById(this.kmorder).subscribe();
    this.route.navigate(['orders']);
  }
}
