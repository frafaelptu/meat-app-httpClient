import { CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.services';

@Injectable()
export class LoggedInGuard implements CanLoad{

    
    constructor(private loginService: LoginService){}

    canLoad(route: Route){
        const loggedIn = this.loginService.isLoggedIn();
        if(!loggedIn){
            this.loginService.handleLogin(`/${route.path}`);
        }
        return loggedIn;
    }
}