import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DesingnersComponent } from './desingners/desingners.component';
import { PackagesComponent } from './packages/packages.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'',redirectTo:"home" ,pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'services' ,component:ServicesComponent},
  {path:'desingners' ,component:DesingnersComponent},
  {path:'packages' ,component:PackagesComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotfoundComponent}
];
