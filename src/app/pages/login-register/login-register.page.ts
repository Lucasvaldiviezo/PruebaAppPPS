import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
  mostrarVentanaLogeo:boolean = false;
  mostrarVentanaRegistro:boolean = false;
  constructor(public router:Router) { }

  ngOnInit() {
  }

  AbrirRegistro(){

    this.mostrarVentanaLogeo = false;
    this.mostrarVentanaRegistro = true;
  }

  AbrirLogeo(){
    this.mostrarVentanaLogeo = true;
    this.mostrarVentanaRegistro = false;
  }

  VolverAInicio(){
    this.router.navigateByUrl('home');
  }
}
