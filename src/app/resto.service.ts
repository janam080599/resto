import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url: string="http://localhost:3000/restaurants"
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveResto(data:any){
    return this.http.post(this.url,data);
  }
  deleteResto(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentResto(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }

  public subject=new BehaviorSubject<any>('');
  emit<T>(data:T){
    this.subject.next(data);
  }
  on<T>():Observable<T>{
    return this.subject.asObservable();
  }
}
