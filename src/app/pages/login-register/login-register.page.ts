import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
  mostrarVentanaLogeo:boolean = false;
  mostrarVentanaRegistro:boolean = false;
  constructor() { }

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

}
