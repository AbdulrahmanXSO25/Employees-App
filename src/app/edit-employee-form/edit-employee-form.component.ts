import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(public service:EmployeesService, private _Activatedroute:ActivatedRoute) {
    this.showChanges();
  }


  showChanges() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.service.getEmployeeById(params.get('id')).subscribe( (employee) => {
        this.employee = employee;
      } );
    });
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
    this.service.putEmployee(id,this.EditEmployeeRequest)
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
