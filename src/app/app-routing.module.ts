import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
const routes: Routes = [
  {
    path:'user' ,loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'user1' ,loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'user2' ,loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'user3' ,loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'user4' ,loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
