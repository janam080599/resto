import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestoService } from '../../resto.service';

@Component({
  selector: 'app-view-resto',
  templateUrl: './view-resto.component.html',
  styleUrls: ['./view-resto.component.css'],
})
export class ViewRestoComponent implements OnInit {

 

  constructor(private router:ActivatedRoute, private resto: RestoService) { }

  collect:any

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    
      this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result1:any)=>{
        this.collect=result1.details;
      })
    
    
  }

  
  

}
