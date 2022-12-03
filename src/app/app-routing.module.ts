import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { AddCityFormComponent } from './add-city-form/add-city-form.component';
import { EditCityFormComponent } from './edit-city-form/edit-city-form.component';
import { EditDepartmentFormComponent } from './edit-department-form/edit-department-form.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddDepartmentFormComponent } from './add-department-form/add-department-form.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { EditEmployeeFormComponent } from './edit-employee-form/edit-employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'cities/add', component: AddCityFormComponent},
  {path: 'cities/details/:id', component: CityDetailsComponent},
  {path: 'cities/edit/:id', component: EditCityFormComponent},
  {path: 'departments/add', component: AddDepartmentFormComponent},
  {path: 'departments/details/:id', component: DepartmentDetailsComponent},
  {path: 'departments/edit/:id', component: EditDepartmentFormComponent},
  {path: 'employees/add', component: AddEmployeeFormComponent},
  {path: 'employees/details/:id', component: EmployeeDetailsComponent},
  {path: 'employees/edit/:id', component: EditEmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
