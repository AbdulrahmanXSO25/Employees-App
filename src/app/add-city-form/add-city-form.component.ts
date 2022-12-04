import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { City } from '../city.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city-form',
  templateUrl: './add-city-form.component.html',
  styleUrls: ['./add-city-form.component.css']
})
export class AddCityFormComponent implements OnInit {

  constructor(public service:CitiesService, public router:Router) { }

  ngOnInit(): void {
  }

  AddCityRequest:City = {
    CityNameArabic: '',
    CityNameEnglish: ''
  }


  navigateCities() {
    this.router.navigate(['/cities']);
  }

  formValidated = this.AddCityRequest.CityNameArabic == '' && this.AddCityRequest.CityNameArabic == '' ? true : false;

  postCity() {
    if (this.formValidated)
    {
      this.service.postCity(this.AddCityRequest)
      .subscribe((res) => {
        console.log(res);
        alert(this.AddCityRequest.CityNameEnglish.toUpperCase() + " HAS BEEN ADDED SUCCESSFULLY");
        if (res.success) this.navigateCities();
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
