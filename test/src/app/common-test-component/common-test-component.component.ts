import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-common-test-component',
  templateUrl: './common-test-component.component.html',
  styleUrls: ['./common-test-component.component.css']
})
export class CommonTestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() compNum : EventEmitter <number> = new EventEmitter<number>();
  buttonClick(v){    
    this.compNum.emit(v);
    }
  
}
