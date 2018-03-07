import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

import {UserModule} from './user/user.module';
import {HighlightDirective} from './highlight.directive';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {appRoutes} from './app.routes';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, HighlightDirective, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, UserModule, RouterModule.forRoot([]), HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
