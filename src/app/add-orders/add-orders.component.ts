import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators  } from "@angular/forms";
import { Router } from '@angular/router';
import { Kmorder } from '../orders/kmorder';
import { KmserviceService } from '../orders/kmservice.service';
@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

  kmorder:Kmorder=new Kmorder();

  addItems=new FormGroup({
    item: new FormControl('',[Validators.required]),
    buyer:new FormControl('',[Validators.required])
  })
  constructor(private kmservice:KmserviceService,private route:Router ) { }

  ngOnInit(): void {
  }

  addOrder(){

    console.log(this.kmorder);
    this.kmservice.addOrder(this.kmorder).subscribe();
    this.route.navigate(['orders']);
  }
  get item(){
    return this.addItems.get('item');
  }
  get buyer(){
    return this.addItems.get('buyer');
  }
}
