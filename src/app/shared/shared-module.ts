import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule} from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartServices } from '../restaurant-detail/shopping-cart/shopping-cart.services';
import { RestaurantsServices } from 'app/restaurants/restaurants.services';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificantionServices } from './messages/notification.services';


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
            SnackbarComponent, CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartServices, RestaurantsServices, OrderService, NotificantionServices]
        }
    }
}