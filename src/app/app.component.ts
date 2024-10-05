import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';
  a=600;
  b=700;
  sub=this.a-this.b;
  add=this.a+this.b;

  disable=true;
  enabled=false;

  name="";
  submitmethod() {
    this.name=this.title;
  }
 
  word="";

  num1=0;
  num2=0;

  sum=0;
  submitnum(){
  this.sum=this.num1+this.num2;
  }

}
