import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cardDetails = [
    {
      itemName:'Spicy Chicken Burger',
      imgUrl:'./../../../../assets/spicyCheckenBurger.PNG',
      contend:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },{
      itemName:'Spicy Beef Burger',
      imgUrl:'./../../../../assets/spicyBeefBurger.jpeg',
      contend:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },{
      itemName:'Potato Burger',
      imgUrl:'./../../../../assets/potatoBurger.PNG',
      contend:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },{
      itemName:'Zinger Burger',
      imgUrl:'./../../../../assets/zingerBurger.jpeg',
      contend:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },{
      itemName:'Cheese Chicken Burger',
      imgUrl:'./../../../../assets/cheeseChickenBurger.jpeg',
      contend:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },{
      itemName:'Crispy Chicken Burger',
      imgUrl:'./../../../../assets/crispyChickenBurger.jpeg',
      contend:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    }
  ]
}
