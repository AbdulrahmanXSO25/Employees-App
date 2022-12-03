import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  sub:any;
  department:any;

  constructor(public service:DepartmentsService, private activatedroute:ActivatedRoute) {
    this.sub = this.activatedroute.paramMap.subscribe((params) => {
      this.service.getDepartmentById(params.get('id')).subscribe( (department) => {
        this.department = department;
      } );
    });
  }

  delete(id:any){
    this.service.deleteDepartment(id).subscribe( (res)=>{
      console.log(res);
    },
    (err) =>{
      alert("There are Employees at this department, you can't remove it!");
    });
  }

  ngOnInit(): void {
  }

}
