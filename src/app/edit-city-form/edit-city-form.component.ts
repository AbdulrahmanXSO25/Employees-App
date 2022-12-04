import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities.service';
import { City } from '../city.model';


@Component({
  selector: 'app-edit-city-form',
  templateUrl: './edit-city-form.component.html',
  styleUrls: ['./edit-city-form.component.css']
})
export class EditCityFormComponent implements OnInit {

  sub:any;
  city:any;

  constructor(public service:CitiesService, private _Activatedroute:ActivatedRoute) {
    this.showChanges();
  }


  showChanges() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.service.getCityById(params.get('id')).subscribe( (city) => {
        this.city = city;
      } );
    });
  }

  EditCityRequest:City = {
    CityNameArabic: '',
    CityNameEnglish: ''
  }

  putCity(id:any) {
    this.service.putCity(this.EditCityRequest,id)
    .subscribe((res) => {
        console.log(res);
        alert(this.EditCityRequest.CityNameEnglish.toUpperCase() + " HAS BEEN EDITED SUCCESSFULLY");
        this.showChanges();
      },
      (err) => {
        console.log(err.error);
      }
    );
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
