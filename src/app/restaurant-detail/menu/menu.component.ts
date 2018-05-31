import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from '../../restaurants/restaurants.services';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantsServices: RestaurantsServices, 
              private routes: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsServices
      .menuOfRestaurant(this.routes.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
