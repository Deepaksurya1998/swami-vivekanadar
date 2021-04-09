import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TrustMembersComponent } from './trust-members/trust-members.component';
import { ServicesComponent } from './services/services.component';
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { MembersService } from './shared/members.service';
import { AddMembersComponent } from './add-members/add-members.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FirebaeService } from './auth/firebae.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TrustMembersComponent,
    ServicesComponent,
    ImagesComponent,
    ContactComponent,
    HomeComponent,
    AddMembersComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [MembersService,
  FirebaeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
