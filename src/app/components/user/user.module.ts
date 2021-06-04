import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './screens/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './screens/user-detail/user-detail.component';
import { MessagesComponent } from '../messages/messages.component';


@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    UserDetailComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule

  ]
})
export class UserModule { }
