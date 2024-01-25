import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { userRoutingModule } from './user-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { adminRoutingModule } from './admin-routing.module';
import { UserformComponent } from './userform/userform.component';
import { userformRoutingModule } from './userform-routing.module';
import { SetComponent } from './set/set.component';
import { GetComponent } from './get/get.component';
import { FormsModule } from '@angular/forms';
import { setRoutingModule } from './set-routing.module';
import { getRoutingModule } from './get-routing.module';
// import{ HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    UserhomeComponent,
    AdminhomeComponent,
    UserformComponent,
    UserhomeComponent,
    GetComponent,
    SetComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule,
    adminRoutingModule,
    userformRoutingModule,
    FormsModule,
    setRoutingModule,
    getRoutingModule,
    userformRoutingModule
    // HttpClient

    

  ]
})
export class UserModule { }
