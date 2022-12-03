import { Component, OnInit, OnDestroy } from '@angular/core';
import { CitiesService } from '../cities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { City } from '../city.model';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {


  sub:any;
  city:any;

  constructor(public service:CitiesService, private _Activatedroute:ActivatedRoute) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.service.getCityById(params.get('id')).subscribe( (city) => {
        this.city = city;
      } );
    });
  }

  delete(id:any){
    this.service.deleteCity(id).subscribe( (res)=>{
      console.log(res);
    },
    (err) =>{
      alert("There are Employees in this city, you can't remove it!");
    });
  }

  ngOnInit(): void {
  }

}
