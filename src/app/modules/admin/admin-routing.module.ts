import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { UsersComponent } from './components/users/users.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'employees', component: ViewEmployeesComponent },
      { path: 'edit-employees', component: EditEmployeesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: '', redirectTo: '/admin/users', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
