import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { EventhistoryComponent } from './eventhistory/eventhistory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'eventhistory',component:EventhistoryComponent
  },
  {
    path:'deleteevent',component:DeleteeventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
