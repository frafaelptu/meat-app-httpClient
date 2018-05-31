import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from '../../restaurants/restaurants.services';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsServices: RestaurantsServices, 
              private routes: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsServices
      .reviewsOfRestaurant(this.routes.parent.snapshot.params['id']);
  }

}
