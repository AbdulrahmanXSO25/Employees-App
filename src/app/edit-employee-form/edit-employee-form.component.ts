import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities.service';
import { DepartmentsService } from '../departments.service';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html',
  styleUrls: ['./edit-employee-form.component.css']
})
export class EditEmployeeFormComponent implements OnInit {

  sub:any;
  employee:any;
  allDepartments:any = [];
  allCities:any = [];
  constructor(public service:EmployeesService, private _Activatedroute:ActivatedRoute, private datepipe:DatePipe, public serviceTwo:DepartmentsService, public serviceThree:CitiesService) {
    this.serviceTwo.getAllDepartments().subscribe( (departments) => {
      this.allDepartments = departments;
    } );
    this.serviceThree.getAllcities().subscribe( (cities) => {
      this.allCities = cities;
    } );
    this.showChanges();
  }


  showChanges() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.service.getEmployeeById(params.get('id')).subscribe( (employee) => {
        this.employee = employee;
        this.myFunction(this.employee);
      } );
    });
  }

  myFunction(employee:any) {
    employee.dob = this.datepipe.transform(employee.dob, 'yyyy-MM-dd');
    employee.hiringDate = this.datepipe.transform(employee.hiringDate, 'yyyy-MM-dd');
  }

  EditEmployeeRequest:Employee = {
    EmployeeNameArabic: '',
    EmployeeNameEnglish: '',
    Dob: null,
    HiringDate: null,
    Salary: null,
    DepartmentId:null,
    CityId:null
  }

  putEmployee(id:any) {
    this.service.putEmployee(this.EditEmployeeRequest,id)
    .subscribe((res) => {
        console.log(res);
        alert(this.EditEmployeeRequest.EmployeeNameEnglish.toUpperCase() + " HAS BEEN EDITED SUCCESSFULLY");
        this.showChanges();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  delete(id:any){
    this.service.deleteEmployee(id).subscribe( (res)=>{
      console.log(res);
    },
    (err) =>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
