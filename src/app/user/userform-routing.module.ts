import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserformComponent } from './userform/userform.component';
const routes: Routes = [
  {
    path:"c3" ,component:UserformComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userformRoutingModule { }
