import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItem[]=[];
  totalPrice: Subject<number> =new Subject<number>();
  totalQuantity: Subject<number> =new Subject<number>();
  
  constructor() {} 

    addToCart(theCartItem: CartItem){
    
      let alreadyExistCart: boolean=false;
      let existingCartItem: CartItem=undefined;
    
      if(this.cartItem.length>0){
    
    
    existingCartItem=this.cartItem.find(tempCartItem => tempCartItem.id===theCartItem.id);
    //check if we found it
    alreadyExistCart=(existingCartItem!=undefined);
      }
     
      if (alreadyExistCart) {
    
        //increment the quantity
          existingCartItem.quantity++;
      }
    else{
    
      //just add the items to the array
      this.cartItem.push(theCartItem);
    }
    
    //compute cart total price and total quanity
    this.computeCartTotals();
    
    }
      computeCartTotals() {
        let totalPriceValue: number=0;
        let totalQuantity: number=0;
    
        for(let currentCartItem of this.cartItem) {
    
          totalPriceValue+= currentCartItem.quantity*currentCartItem.productprice;
          totalQuantity+=currentCartItem.quantity;
        }
    
        //publish the new values ...all subscribers will receive this data
        this.totalPrice.next(totalPriceValue);
        this.totalQuantity.next(totalQuantity);
    
    
    //log the cart status data for debugging purpose
    this.logCartData(totalPriceValue,totalQuantity);
    
      }
      logCartData(totalPriceValue: number, totalQuantity: number) {
        console.log('contents of the cart');
        for(let tempCartItem of this.cartItem){
          const subtotalprice=tempCartItem.quantity*tempCartItem.productprice;
          console.log(`cart total is ${subtotalprice}`);
          const totalQ=tempCartItem.quantity;
          console.log(`total items are ${totalQ}`); 
        }
      }
    
      decreaseFromCart(tempcartitems: CartItem) {
        tempcartitems.quantity--;
    
        if(tempcartitems.quantity===0){
          this.remove(tempcartitems);
        }
        else{
          this.computeCartTotals(); 
        }
      }
      remove(tempcartitems: CartItem) {
        //get index of item in the array
    const itemIndex= this.cartItem.findIndex(tempcartitem=> tempcartitem.id===tempcartitems.id);
        //if found, remove the item from the array at the given index
    if (itemIndex>-1){
      this.cartItem.splice(itemIndex, 1);
      this.computeCartTotals();
    }
      }
  }
