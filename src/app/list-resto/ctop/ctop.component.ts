import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ctop',
  templateUrl: './ctop.component.html',
  styleUrls: ['./ctop.component.css']
})
export class CtopComponent implements OnInit {
  @Output() parentFunction:EventEmitter<any>=new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    let data="Thanks for clicking me!";
    this.parentFunction.emit(data);
  }

}
