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
    let cityName:string;
    this.service.getCityById(id).subscribe(res =>{cityName = res.cityNameEnglish});
    this.service.deleteCity(id).subscribe(res =>{
      alert(cityName.toUpperCase() + " HAS BEEN DELETED SUCCESSFULLY");
      this.getCities();
    },
    (err)=> {
      alert("There are Employees in this city, you can't remove it!");
    });
  }

}
