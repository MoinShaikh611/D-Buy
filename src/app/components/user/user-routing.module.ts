import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './screens/register/register.component';
import { UserDetailComponent } from './screens/user-detail/user-detail.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  // user path
  {
    path:'',
    component:UserComponent,
    children:[
      {path:'register',component:RegisterComponent},

      {path:'user-detail',component:UserDetailComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class UserRoutingModule { }
