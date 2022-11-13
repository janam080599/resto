import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editResto=new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*') ]),
    address: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    details: new FormControl('',Validators.required)
  })

  get email(){return this.editResto.get('email')};
  get address(){return this.editResto.get('address')};
  get name(){return this.editResto.get('name')};
  get details(){return this.editResto.get('details')};

  constructor(private router:ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editResto=new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        details: new FormControl(result['details'])

    })
  })
}
  collection(){
    this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe((result)=>{
      console.warn(result);
    })
  }
}
