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
    this.getDepartments();
  }

  getDepartments() {
    this._service.getAllDepartments().subscribe( (departments) => {
      this.allDepartments = departments;
    } );
  }

  ngOnInit(): void {
  }

  delete(id:any){
    let departmentName:string;
    this._service.getDepartmentById(id).subscribe(res =>{departmentName = res.departmentName});
    this._service.deleteDepartment(id).subscribe( (res)=>{
      console.log(res);
      alert(departmentName.toUpperCase() + " HAS BEEN DELETED SUCCESSFULLY");
      this.getDepartments();
    },
    (err) =>{
      alert("There are Employees at this Department, you can't remove it!");
    });
  }

}
