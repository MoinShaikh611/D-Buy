import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  // For Home component(App Entry)
  {
    path:'',component:HomeComponent
  },

  // Admin Module and its children
  {
    path:'admin',
    loadChildren:() => import('./components/admin/admin.module').then(m => m.AdminModule)
  },

  // User Module and its childrens
  {
    path:'user',
    loadChildren:() => import('./components/user/user.module').then(m => m.UserModule)
  },


  // Invalid Urls
  {
    path:'**', redirectTo:'',pathMatch:'full' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
