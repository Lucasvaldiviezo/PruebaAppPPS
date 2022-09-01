import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  constructor(public authService:AuthServiceService,private alertController:AlertController, public ruteo:Router) { }

  ngOnInit() { }


  registrarse(){
    const{email,password}=this.user;
    this.authService.register(email, password)
      .then((res: any) => {
        this.presentAlert('Cuenta creada con exito');
        this.ruteo.navigateByUrl('home');
      })
      .catch((error: any) => {
        console.log("error al registrarse", error);
        this.presentAlert('Ese correo ya existe');
      });
  }

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      header: 'Registro',
      subHeader: '-',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
