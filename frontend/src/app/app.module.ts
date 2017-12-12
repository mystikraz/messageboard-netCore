import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule

} from '@angular/material';

import {WebService} from './web.service';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


const routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'messages',
  component: MessagesComponent
  },
  {
  path: 'messages/:name',
  component: MessagesComponent
  },
  {
  path: 'register',
  component: RegisterComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'user',
  component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatCardModule,
      MatInputModule,
      MatSnackBarModule,
      MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
