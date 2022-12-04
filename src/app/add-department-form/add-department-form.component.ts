import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department.model';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-add-department-form',
  templateUrl: './add-department-form.component.html',
  styleUrls: ['./add-department-form.component.css']
})
export class AddDepartmentFormComponent implements OnInit {

  constructor(public service:DepartmentsService, public router:Router) { }

  ngOnInit(): void {
  }

  AddDepartmentRequest:Department = {
    DepartmentName: '',
    DepartmentAbbr: ''
  }


  navigateDepartments() {
    this.router.navigate(['/departments']);
  }

  formValidated = this.AddDepartmentRequest.DepartmentName == '' && this.AddDepartmentRequest.DepartmentAbbr == '' ? true : false;

  postDepartment() {
    if (this.formValidated)
    {
      this.service.postDepartment(this.AddDepartmentRequest)
      .subscribe((res) => {
        console.log(res);
        alert(this.AddDepartmentRequest.DepartmentName.toUpperCase() + " HAS BEEN ADDED SUCCESSFULLY");
        if (res.success) this.navigateDepartments();
      },
      (err) => {
        console.log(err.error);
      }
    );
    }
    else {
      alert('One Field Or More Is Empty');
    }
  }

}
