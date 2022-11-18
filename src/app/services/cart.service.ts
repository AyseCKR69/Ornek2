import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(todo:Todo){
    // ilgili arrayi tek tek dolaşır 
    let item=CartItems.find(c=>c.product.id===todo.id);
    //arraydaki todonun idsi tıklanılanın(gönderilenin) idsine eşit mi

    if(item)//eğer item varsa
    {
      item.quantity+=1;
    }
    else
    {
      let cartItem=new CartItem();
      cartItem.product=todo;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  list():CartItem[]{
    return CartItems;
  }

  removeFromCart(todo:Todo){
    let item:CartItem = CartItems.find(c=>c.product.id===todo.id);
    CartItems.splice(CartItems.indexOf(item),1);
    //splice silmek demek ilgili cartitemden itibaren1 tane sil demek
  }
}
