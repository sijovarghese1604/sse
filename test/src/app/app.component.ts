import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  num : number =0;
  show1: boolean= true;
  show2: boolean= true;
  show3: boolean= true;
  show4: boolean= true;
  compNumber(num: number):void{
    this.num=num;
    if(num===1){
      this.show1 = !this.show1;
    }else if(num===2){
      this.show2 = !this.show2;
    }else if(num===3){
      this.show3 = !this.show3;
    }else if(num===4){
      this.show4 = !this.show4;
    }
  }
}
