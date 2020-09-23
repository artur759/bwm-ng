import { Component } from '@angular/core';

@Component({
  //  na podstawie selectopra podajemy w index.html jaki compnett wczytujemy
  selector: 'app-root',
  // A to wskazuje jaki template mamy uzyc dla tego compnenta
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentTitle = "I am app component from component.ts";

  clickHandler(){
    alert("Clicked");
  }
}
