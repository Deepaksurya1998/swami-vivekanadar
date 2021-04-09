import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { FirebaeService } from '../auth/firebae.service';
import firebase from "firebase/app";
import "firebase/auth";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(public firebaseService : FirebaeService , public  router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
    this.checkuser();
  }
isSignedIn = false;



async onSignin(email: string , password:string){
  await this.firebaseService.signin(email , password)
  if(this.firebaseService.isLoggedin)
  this.isSignedIn = true
  this.router.navigate(['/add-members']);
}

handleLogout(){

}

isloggedin = false;
  checkuser(){
   
    // if (this.isSignedIn) {
    //   this.router.navigate(['/add-members']);
    // } else {
    //   this.router.navigate(['/']); // tells them they've been logged out (somehow)

    // }
}
}
