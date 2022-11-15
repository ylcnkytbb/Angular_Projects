import { Component } from '@angular/core'; //TodoComponenti oluşturduğumuzda bunlar otomatik geldi
import { Model } from '../model';
import { TodoItem } from '../todoitem';


//artık app componenti silebiliriz

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
   //message = ""; two way bindinde buna gerek yok 

  displayAll: boolean = true;
  inputText: string = ""; // inputa herhangi bir şey yazmadığımızda add butonunun pasif olmasını sağlama işlemi
  items = []; //görev listesinin tutulacağı dizi

  constructor() {
    this.model.items = this.getItemsFromLS();
   }

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

  // addItem() {
  //   if(this.inputText!="") {
  //     this.model.items.push ({ description: this.inputText, action: false });
  //     this.inputText = "";
  //   } else{
  //     alert("Bilgi giriniz")
  //   }
    
  // }
 
  //*******************Local Storage******************

   addItem() {
    if(this.inputText!="") {
      let data = {description: this.inputText, action: false};
      this.model.items.push(data);
      
      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));  //veri saklayabilmek için
      this.inputText = "";
    } else{
      alert("Bilgi giriniz")
    }
    
  }

  // deleteItem(item: any) {
  //   for (let i=0 ; i < this.items.length; i++){
  //     if (item == this.items[i]){
  //       this.items.splice(i, 1)
  //     }
  //   }
  // }

  getItemsFromLS() {
     let items: TodoItem[] = []  //TİP ATAMASI YAPTIK

     let value = localStorage.getItem("items");
     if(value != null ) {
      items = JSON.parse(value);
     }

     return items;
  }

  onActionChanged(item: TodoItem) {
   
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach(i => {
      if(i.description == item.description) {
        i.action == item.action;
      }
    });

    localStorage.setItem("items", JSON.stringify(items));

  }


  displayCount() {

    return this.model.items.filter(i => i.action).length; //tamamlanan görevlerin sayısını belirtmek için
  }

  getBtnClasses() {
    return {
      'disabled': this.inputText.length==0,
      'btn-secondary':this.inputText.length==0,
      'btn-primary':this.inputText.length>0
    }
  }

}
