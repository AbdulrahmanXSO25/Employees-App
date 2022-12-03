import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityDetailsComponent } from './city-details/city-details.component';
import { AddCityFormComponent } from './add-city-form/add-city-form.component';
import { EditCityFormComponent } from './edit-city-form/edit-city-form.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { EditEmployeeFormComponent } from './edit-employee-form/edit-employee-form.component';
import { AddDepartmentFormComponent } from './add-department-form/add-department-form.component';
import { EditDepartmentFormComponent } from './edit-department-form/edit-department-form.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CitiesComponent,
    DepartmentsComponent,
    EmployeesComponent,
    CityDetailsComponent,
    AddCityFormComponent,
    EditCityFormComponent,
    DepartmentDetailsComponent,
    EmployeeDetailsComponent,
    AddEmployeeFormComponent,
    EditEmployeeFormComponent,
    AddDepartmentFormComponent,
    EditDepartmentFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,// ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
