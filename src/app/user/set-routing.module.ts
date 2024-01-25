import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
const routes: Routes = [
  {
    path:"c4" ,component:SetComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class setRoutingModule { }
