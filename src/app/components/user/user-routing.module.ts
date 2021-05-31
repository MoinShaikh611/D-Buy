import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './screens/register/register.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  // user path
  {
    path:'',component:UserComponent,
    children:[

      // login
      {path:'register',component:RegisterComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class UserRoutingModule { }
