import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { HeartComponent } from './heart/heart.component';
import {MatButtonModule} from '@angular/material/button';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DataService } from './data.service';
import { TipsComponent } from './tips/tips.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContributeComponent } from './contribute/contribute.component'; 
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import{MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ShortcutComponent } from './shortcut/shortcut.component';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import { QuickaccessComponent } from './quickaccess/quickaccess.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PassewordrecoveryComponent } from './passewordrecovery/passewordrecovery.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    TipsComponent,
    HomeComponent,
    ContactusComponent,
    ContributeComponent,
    RegisterComponent,
    LoginComponent,
    ShortcutComponent,
    QuickaccessComponent,
    PassewordrecoveryComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    SlideshowModule,
    MatDividerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    TextFieldModule,
    MatExpansionModule,
    MatDialogModule   
    
    
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent,HeartComponent]
})
export class AppModule {

  
 }
