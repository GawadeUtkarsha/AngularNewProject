import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { adminRoutingModule } from './user/admin-routing.module';
import { FormsModule } from '@angular/forms';
import { getRoutingModule } from './user/get-routing.module';
import { setRoutingModule } from './user/set-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './user/adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
