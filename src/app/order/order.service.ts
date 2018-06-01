import { Injectable } from '@angular/core';
import { ShoppingCartServices } from '../restaurant-detail/shopping-cart/shopping-cart.services';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MEAT_API } from '../app.api';
import { LoginService } from '../security/login/login.services';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartServices, 
                private http: HttpClient,
                private loginService: LoginService){}

    cartItens(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem){
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string> {
        let headers = new HttpHeaders();
        if(this.loginService.isLoggedIn()){
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }
        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers}).map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }
  
}