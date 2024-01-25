import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
const routes: Routes = [
  {
    path:"c5" ,component:GetComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class getRoutingModule { }
