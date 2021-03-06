import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './dashboard/projects.component';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path : 'dashboard',
    component : ProjectComponent
  },
  {
    path : 'dashboard/:id',
    component : TicketComponent
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
