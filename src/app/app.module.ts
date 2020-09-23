import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
//a1 Kazdy komponent musimy w taki sposoob zadelkarowac
import {HeaderComponent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';

import {RentalModule} from './rental/rental.module';


const routes: Routes = [
  {path:'', redirectTo: '/rentals', pathMatch : 'full'},


]

@NgModule({
  declarations: [
    AppComponent,
    //a2 Oraz musimy zadeklarowac go tutaj
    HeaderComponent,
   
 
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
