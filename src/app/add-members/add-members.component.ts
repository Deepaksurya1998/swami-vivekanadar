import { formatCurrency } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { FirebaeService } from '../auth/firebae.service';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from '../shared/members.service';
import firebase from "firebase/app";
import "firebase/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit {
   


  constructor(public members : MembersService , public firestore:AngularFirestore , private toaster:ToastrService , public  router: Router , public firebaseService : FirebaeService ) { 
    
  }
  
  ngOnInit(): void {
    this.resetForm();
    this.checkuser();
  }
  
   isloggedin = false;
  checkuser(){
   let user = firebase.auth().currentUser;
    if (user) {
     this.router.navigate(['/add-members']); 
      this.isloggedin=true
    } else {
    this.isloggedin = false
    this.router.navigate(['/']); 

    }
  }

  resetForm(form? :NgForm){
    if(form!= null)
    form.resetForm();
    this.members.formData= {
      id:'',
      fullname:'',
      position:'',
      

    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('trust-members').add(data);
    this.resetForm(form);
    this.toaster.success('Submitted successfully' , 'Member Added');
  }

  logout(){
    this.isloggedin=false;
   
     
    
  }
}
