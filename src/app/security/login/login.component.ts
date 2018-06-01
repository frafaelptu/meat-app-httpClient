import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.services';
import { NotificantionServices } from '../../shared/messages/notification.services';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder, 
              private loginService: LoginService,
              private notificantionServices: NotificantionServices,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login(){
    this.loginService.login(this.loginForm.value.email, 
                            this.loginForm.value.password)
                            //subscribe pode ser passado 3 callbacks(Resposta, erro, navegação (geralmente usada))
                            .subscribe(user => this.notificantionServices.notify(`Bem vindo, ${user.name}`),
                            //response = httpErrorResponse - callback de erro => resp.status(403).json({ message: 'Não autorizado!' })
                            response => this.notificantionServices.notify(response.error.message),
                          () => this.router.navigate([atob(this.navigateTo)]));

  }

}
