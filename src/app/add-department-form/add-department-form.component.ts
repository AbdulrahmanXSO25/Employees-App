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


  navigateCities() {
    this.router.navigate(['/cities']);
  }

  formValidated = this.AddDepartmentRequest.DepartmentName == '' && this.AddDepartmentRequest.DepartmentAbbr == '' ? true : false;

  postDepartment() {
    if (this.formValidated)
    {
      this.service.postDepartment(this.AddDepartmentRequest)
      .subscribe((res) => {
      if (res.success)
      {
        console.log(res);
        alert(this.AddDepartmentRequest.DepartmentName.toUpperCase() + " HAS BEEN ADDED SUCCESSFULLY");
      }
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
