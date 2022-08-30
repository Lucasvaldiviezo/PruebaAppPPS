import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public afauth: AngularFireAuth) { }
  isUserLogged:boolean = false;
  async register(email:string,password:string)
  {
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    }catch(error)
    {
      console.log("error en registro", error);
      return null;
    }
  }

  async login(email:string,password:string)
  {
    try{
      this.isUserLogged=true;
      return await this.afauth.signInWithEmailAndPassword(email,password);
    }catch (error)
    {
      console.log("error en login", error);
      return null;
    }
  }
}
