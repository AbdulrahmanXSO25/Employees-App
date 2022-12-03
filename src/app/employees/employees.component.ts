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
  constructor(public _service:EmployeesService,public _citiesService:CitiesService) {
      this._service.getAllEmployees().subscribe( (employees) => {
      this.allEmployees = employees;
    } );
  }

  ngOnInit(): void {
  }

  delete(id:any){
    this._service.deleteEmployee(id).subscribe( res =>{
      this._service.getAllEmployees();
    })
  }

}
