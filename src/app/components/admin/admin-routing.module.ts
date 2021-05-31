import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  //admin path
  {
    path:'',
    component:AdminComponent,
    children:[
    
      // dashboard
    {path:'dashboard',component:DashboardComponent}

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
