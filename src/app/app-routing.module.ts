import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { TrustMembersComponent } from './trust-members/trust-members.component';

const routes: Routes = [{ path: 'About', component: AboutComponent },
{ path: 'trust-members', component: TrustMembersComponent },
{ path: '', component: HomeComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'images', component: ImagesComponent },
{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
