import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaeService {

  isLoggedin = false;

  constructor(public firebaseAuth : AngularFireAuth) {
   
   }
   async signin(email : string , password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email , password)
    .then(res => {
      this.isLoggedin = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }


  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
