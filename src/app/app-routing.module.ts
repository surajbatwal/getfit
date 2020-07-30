import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeartComponent } from './heart/heart.component';
import { TipsComponent } from './tips/tips.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuickaccessComponent } from './quickaccess/quickaccess.component';

import { PassewordrecoveryComponent } from './passewordrecovery/passewordrecovery.component';

const routes: Routes = [

  {path : 'heart', component:HeartComponent},
  {path : 'tips', component:TipsComponent},
  {path : 'home', component:HomeComponent},
  {path : 'contactus', component:ContactusComponent},
  {path : 'contribute', component:ContributeComponent},
  {path : 'app', component:AppComponent},
  {path : 'login', component:LoginComponent},
  {path : 'register', component:RegisterComponent},
  {path : 'quick', component:QuickaccessComponent},
  {path : 'passwordrecovery', component:PassewordrecoveryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
