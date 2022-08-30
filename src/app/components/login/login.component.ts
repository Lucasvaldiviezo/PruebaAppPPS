import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public ruteo:Router, public authService:AuthServiceService) { }

  ngOnInit() {}
  
  user={
    email:'',
    password:''
  }

  loguearse(){
    const{email,password}=this.user;
    this.authService.login(email,password)
    .then(
      res =>{
        if(res==null)
        {
          console.log("error al logearse",res);
        }else
        {
          console.log("ingreso!: ",res);
          this.ruteo.navigateByUrl('home');
        } 
      })
    .catch((error:any) =>
      {
          console.log("error al logearse",error);
      });
    this.user.email = "";
    this.user.password = "";
  }
}
