import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//a1 Kazdy komponent musimy w taki sposoob zadelkarowac
import {HeaderComponent} from './common/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    //a2 Oraz musimy zadeklarowac go tutaj
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
