import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  constructor(public service:EmployeesService, public router:Router) { }

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


  navigateCities() {
    this.router.navigate(['/cities']);
  }

  formValidated = this.AddEmployeeRequest.EmployeeNameArabic == '' && this.AddEmployeeRequest.EmployeeNameArabic == '' ? true : false;

  postEmployee() {
    if (this.formValidated)
    {
      this.service.postEmployee(this.AddEmployeeRequest)
      .subscribe((res) => {
      if (res.success)
      {
        console.log(res);
        alert(this.AddEmployeeRequest.EmployeeNameEnglish.toUpperCase() + " HAS BEEN ADDED SUCCESSFULLY");
      }
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
