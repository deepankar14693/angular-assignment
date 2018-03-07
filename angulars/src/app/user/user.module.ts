import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {Form, FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../app.routes';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(appRoutes)
  ],
  exports: [
    LoginComponent, SignupComponent
  ]
})
export class UserModule {}
