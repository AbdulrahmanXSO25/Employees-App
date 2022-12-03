import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { CitiesService } from '../cities.service';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  allEmployees:any = [];
  constructor(public service:EmployeesService,public _citiesService:CitiesService) {
    this.getEmployees();
  }


  getEmployees() {
    this.service.getAllEmployees().subscribe( (employees) => {
      this.allEmployees = employees;
    } );
  }

  ngOnInit(): void {
  }

  delete(id:any){
    this.service.deleteEmployee(id).subscribe( res =>{
      this.getEmployees();
    })
  }

}
