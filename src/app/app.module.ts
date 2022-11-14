import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [  //ilerleyen aşamalarda birden fazla component ekliycez 
    TodoComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]  //başlangıç componenti
})
export class AppModule { }
