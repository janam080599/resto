import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean=false;
  data:any='Enter your name';

  addResto=new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*') ]),
    address: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    details: new FormControl('',Validators.required)
  })

  get email(){return this.addResto.get('email')};
  get address(){return this.addResto.get('address')};
  get name(){return this.addResto.get('name')};
  get details(){return this.addResto.get('details')};

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  send(){
    this.resto.emit<string>('This is an example of sibling component Interaction');
  }
  collectResto(){
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      this.alert=true;
      this.addResto.reset({});
    });
    
  }
  closeAlert(){
    this.alert=false;
    
  }

}
