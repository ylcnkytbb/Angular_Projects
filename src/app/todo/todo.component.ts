import { Component } from '@angular/core'; //TodoComponenti oluşturduğumuzda bunlar otomatik geldi
import { Model } from '../model';


//artık app componenti silebiliriz

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
   //message = ""; two way bindinde buna gerek yok 

  displayAll: boolean = true;

  constructor() { }

  model = new Model(); //model.tsden geldi

 // private name: string = "Tuğba";  //ilerleyen  aşamalarda isim bilgisini veritabanından alabilirim
  
  // items = [
  //   "item 1","item 2","item 3"  
  // ];


//*********************model.tsi oluşturduktan sonra buraya ihtiyacımız yok komple silebiliriz bu kısmı********************************/

  // items: TodoItem[] = [ //tipini tanımladık
  //   { description: "kahvaltı", action: "yes" },
  //   { description: "spor", action: "yes" },
  //   { description: "alışveriş", action: "no" }
  //   new TodoItem("kahvaltı","yes"),
  //   new TodoItem("spor","yes"),
  //   new TodoItem("alışveriş","no"),
  //class tanımlamasına ait bir yer ---- class tanımlamasında nesneyi newlemeyi unutmuyoruz
//];

  getName() {  //private bir nesneye ulaşabilmek için ona get ile ulaşıyoruz
    return this.model.name;
  }

  getItems() {
    if(this.displayAll){
      return this.model.items; 
    }
    else{
      return this.model.items.filter(item => !item.action);
    }
   
  }

  addItem(value: string) {
    if(value!="") {
      this.model.items.push ({ description: value, action: false });
    } else{
      alert("Bilgi giriniz")
    }
    
  }
}
