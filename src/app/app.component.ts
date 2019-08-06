import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   exports:[ ],
//   declarations: []
// })

export class AppComponent {
  appTitle = "MyShoppingCart"
  displayProduct = false;
  displayMyCart = false;
  addToMyCart = false;
  colorSelectedItem = "none";
  selectedItem = false;
  disableClearMyCart = "true";
  selectedListIndex = null;

  imgUrl = "http://www.myiconfinder.com/uploads/iconsets/256-256-b8b53d5bfd698464d4d3fa8b720ef2cb-window.png"




  lists = [

        {
          name: "Orange",
          id: "0001",
          price: 2,
          description: "Sweet Orange",
          image: "https://img.icons8.com/cotton/2x/orange--v1.png",
          qty: 1
        },

        {
          name: "Apple",
          id: "0002",
          price: 3,
          description: "Sweet Apple",
          image: "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/apple.png",
          qty: 1
        },

        {
          name: "Grape",
          id: "0003",
          price: 5,
          description: "Sweet Grape",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiTHUjGdLadj7MlX-qr9wL-lFSpDBq81QgWKUwZexuQKdZxwZ",
          qty: 1
        }
  ]


  // onClick(index){
  //   this.selectedListIndex = index
  // }

  onclicklogo(){
    // alert("Hello")
    this.displayProduct = !this.displayProduct
  }

  onclickMyCart(){
    this.displayMyCart = !this.displayMyCart
  }

  onclickAddToMyCart(){
    
  }

  onclickSelectItem(){
    if(this.colorSelectedItem === "aqua"){
      this.colorSelectedItem = "none"
    } else if(this.colorSelectedItem === "none"){
      this.colorSelectedItem = "aqua"
    }

    //this.selectedItem = true
    // this.disableClearMyCart = "false"

  }

  // onClickTask(index){
    
  //   if(this.selectedListIndex !== null){
  //     this.selectedListIndex = index
  //     this.lists[this.selectedListIndex] = !this.lists[this.selectedListIndex]
  //   }
  // }











}
