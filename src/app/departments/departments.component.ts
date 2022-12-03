import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  allDepartments:any = [];
  constructor(public _service:DepartmentsService) {
      this._service.getAllDepartments().subscribe( (departments) => {
      this.allDepartments = departments;
    } );
  }

  ngOnInit(): void {
  }

  delete(id:any){
    this._service.deleteDepartment(id).subscribe( (res)=>{
      console.log(res);
    },
    (err) =>{
      alert("There are Employees at this Department, you can't remove it!");
    });
  }

}
