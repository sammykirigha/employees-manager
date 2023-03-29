import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UsersComponent } from './components/users/users.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    AdminDashboardComponent,
    UsersComponent,
    CreateEmployeeComponent,
    CreateUserComponent,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [AdminRoutingModule, CommonModule],
})
export class AdminModule {}
