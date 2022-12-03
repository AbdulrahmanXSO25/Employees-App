import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  sub:any;
  employee:any;

  constructor(public service:EmployeesService, private _Activatedroute:ActivatedRoute) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.service.getEmployeeById(params.get('id')).subscribe( (employee) => {
        this.employee = employee;
      } );
    });
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
