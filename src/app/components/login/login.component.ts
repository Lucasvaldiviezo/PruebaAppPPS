import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''
  }
  mostrarError = false;
  constructor(public ruteo:Router, public authService:AuthServiceService,private alertController:AlertController) { }

  ngOnInit() {}
  
  

  loguearse(){
    const{email,password}=this.user;
    this.authService.login(email,password)
    .then(
      res =>{
        if(res==null)
        {
          console.log("error al logearse",res);
          this.mostrarError = true;
        }else
        {
          console.log("ingreso!: ",res);
          this.presentAlert('Exito al loguearse');
          this.mostrarError = false;
          this.ruteo.navigateByUrl('home');
        } 
      })
    .catch((error:any) =>
      {
          console.log("error al logearse",error);
          this.mostrarError = true;
      });
    this.user.email = "";
    this.user.password = "";
  }

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      header: 'Ingreso',
      subHeader: '-',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
