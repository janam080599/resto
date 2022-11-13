import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  

  constructor(private resto:RestoService) { }
  collection:any=[]
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      this.collection=result;
    });

    this.resto.on<string>().subscribe(d=>{
      this.a=d;
    })
  }

  deleteResto(item:any){
    this.collection.splice(this.collection.indexOf(item),1);
    this.resto.deleteResto(item).subscribe((result)=>{

    })
  }
  
  a:string=""
  det:any="End of List!"
  name:any="";
  parentFunction(data:any){
    this.name=data;
  }
  

}
