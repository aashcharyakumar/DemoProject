import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDemoProject';

whattoshow:number=0;

  btnfun(num:number){
this.whattoshow=num;
  }

}


