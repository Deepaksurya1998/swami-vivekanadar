import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Members } from './members.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  formData! :Members;
  constructor(public firestore:AngularFirestore) {

     
   
   }

   getMembers(){
    return  this.firestore.collection('trust-members').snapshotChanges();
   }

  
}
