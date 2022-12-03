import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { City } from '../city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  allCities:any = [];
  constructor(public service:CitiesService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.service.getAllcities().subscribe( (cities) => {
      this.allCities = cities;
    } );
  }

  delete(id:any){
    this.service.deleteCity(id).subscribe(res=>{
      alert(this.service.getCityById(id).subscribe((res => res.CityNameEnglish)) + " HAS BEEN DELETED SUCCESSFULLY");
      this.getCities();
    },
    (err)=> {
      alert("There are Employees in this city, you can't remove it!");
    });
  }

}
