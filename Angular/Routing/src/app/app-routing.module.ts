import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RevenueComponent } from './revenue/revenue.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'revenue',
    component:RevenueComponent
  },
  {
    path:'about',
    loadChildren:'./about/about.module#AboutModule'
  },
   {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routingcomponents=[HomeComponent,EmployeeListComponent,RevenueComponent];
