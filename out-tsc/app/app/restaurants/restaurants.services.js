var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error.handler';
var RestaurantsServices = (function () {
    function RestaurantsServices(http) {
        this.http = http;
    }
    ;
    RestaurantsServices.prototype.restaurants = function () {
        return this.http.get(MEAT_API + "/restaurants")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantsServices.prototype.restaurantById = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id)
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantsServices.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/reviews")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantsServices.prototype.menuOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/menu")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    return RestaurantsServices;
}());
RestaurantsServices = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RestaurantsServices);
export { RestaurantsServices };
//# sourceMappingURL=restaurants.services.js.map