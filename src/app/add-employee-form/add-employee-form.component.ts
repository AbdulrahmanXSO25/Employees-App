import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitiesService } from '../cities.service';
import { DepartmentsService } from '../departments.service';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {


  allDepartments:any = [];
  allCities:any = [];
  constructor(public service:EmployeesService, public router:Router, public serviceTwo:DepartmentsService, public serviceThree:CitiesService) {
    this.serviceTwo.getAllDepartments().subscribe( (departments) => {
      this.allDepartments = departments;
    } );
    this.serviceThree.getAllcities().subscribe( (cities) => {
      this.allCities = cities;
    } );
  }

  ngOnInit(): void {
  }


  AddEmployeeRequest:Employee = {
    EmployeeNameArabic: '',
    EmployeeNameEnglish: '',
    Dob: null,
    HiringDate: null,
    Salary: null,
    DepartmentId:null,
    CityId:null
  }


  navigateEmployees() {
    this.router.navigate(['/employees']);
  }

  formValidated = this.AddEmployeeRequest.EmployeeNameArabic == '' && this.AddEmployeeRequest.EmployeeNameArabic == '' ? true : false;

  postEmployee() {
    if (this.formValidated)
    {
      this.service.postEmployee(this.AddEmployeeRequest)
      .subscribe((res) => {
        console.log(res);
        console.log(this.AddEmployeeRequest);
        alert(this.AddEmployeeRequest.EmployeeNameEnglish.toUpperCase() + " HAS BEEN ADDED SUCCESSFULLY");
        if (res.success) this.navigateEmployees();
      },
      (err) => {
        console.log(err.error);
      }
    );
    }
    else {
      alert('One Field Or More Is Empty');
    }
  }

}
