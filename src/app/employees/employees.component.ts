import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  allEmployees:any = [];
  constructor(public service:EmployeesService, private datepipe:DatePipe) {
    this.getEmployees();
  }

  getEmployees() {
    this.service.getAllEmployees().subscribe( (employees) => {
      this.allEmployees = employees;
      this.myFunction();
    } );
  }

  myFunction() {
    this.allEmployees.forEach(employee => {
      employee.dob = this.datepipe.transform(employee.dob, 'yyyy-MM-dd');
      employee.hiringDate = this.datepipe.transform(employee.hiringDate, 'yyyy-MM-dd');
    });
  }

  ngOnInit(): void {
  }

  delete(id:any){
    this.service.deleteEmployee(id).subscribe( res =>{
      this.getEmployees();
    })
  }

}
