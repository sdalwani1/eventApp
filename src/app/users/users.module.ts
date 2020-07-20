import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class UsersModule { }
