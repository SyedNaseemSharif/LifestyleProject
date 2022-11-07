import { Component, OnInit } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItem: CartItem[]=[];
  totalPrice: number=0;
  totalQuantity: number=0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
//get a handle to the cart items
this.cartItem=this.cartService.cartItem;
//subscribe to the the cart total price
this.cartService.totalPrice.subscribe(
  data => this.totalPrice=data
);
//subscribe to the cart total quantity
this.cartService.totalQuantity.subscribe(
  data => this.totalQuantity=data
);

//compute cart total price and quantity
this.cartService.computeCartTotals();
}

incrementquantity(tempcartitem:CartItem){

this.cartService.addToCart(tempcartitem);

}

decrementquantity(tempcartitem:CartItem){
this.cartService.decreaseFromCart(tempcartitem);
}

}
