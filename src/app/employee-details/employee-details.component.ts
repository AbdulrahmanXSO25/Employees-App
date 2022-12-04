import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { DatePipe } from '@angular/common';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  sub:any;
  employee:any;

  constructor(public service:EmployeesService, private _Activatedroute:ActivatedRoute, private datepipe:DatePipe) {
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
