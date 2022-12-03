import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../department.model';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-edit-department-form',
  templateUrl: './edit-department-form.component.html',
  styleUrls: ['./edit-department-form.component.css']
})
export class EditDepartmentFormComponent implements OnInit {

  sub:any;
  department:any;

  constructor(public service:DepartmentsService, private _Activatedroute:ActivatedRoute) {
    this.showChanges();
  }


  showChanges() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.service.getDepartmentById(params.get('id')).subscribe( (department) => {
        this.department = department;
      } );
    });
  }

  EditDepartmentRequest:Department = {
    DepartmentName: '',
    DepartmentAbbr: ''
  }

  putDepartment(id:any) {
    this.service.putDepartment(id,this.EditDepartmentRequest)
    .subscribe((res) => {
        console.log(res);
        alert(this.EditDepartmentRequest.DepartmentName.toUpperCase() + " HAS BEEN EDITED SUCCESSFULLY");
        this.showChanges();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  delete(id:any){
    this.service.deleteDepartment(id).subscribe( (res)=>{
      console.log(res);
    },
    (err) =>{
      alert("There are Employees in this city, you can't remove it!");
    });
  }

  ngOnInit(): void {
  }

}
