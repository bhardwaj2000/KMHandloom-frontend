import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Kmorder } from './kmorder';
@Injectable({
  providedIn: 'root'
})
export class KmserviceService {

  id?:number;
  orderUrl="http://localhost:8181/orders";
  constructor(private http:HttpClient) { }
  getAllOrders():Observable<Kmorder[]>{
    return this.http.get<Kmorder[]>(`${this.orderUrl}`);
  }

  addOrder(kmorder?:Kmorder):Observable<object>{
    return this.http.post<object>(`${this.orderUrl}`,kmorder);
  }
  getId(getid?:number){
    this.id=getid;
  }

  getOrderById():Observable<object>{
    return this.http.get<object>(`${this.orderUrl}/${this.id}`);
  }

  updateOrderById(kmorder?:Kmorder):Observable<object>{
    return this.http.put<object>(`${this.orderUrl}/${this.id}`,kmorder);
  }

  deleteOrderById(id?:number):Observable<object>{
    return this.http.delete<object>(`${this.orderUrl}/${id}`);
  }
}
