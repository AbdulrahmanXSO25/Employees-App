import { Injectable } from '@angular/core';
import { City } from './city.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  url:string = "https://localhost:44309/api/City";

  constructor(private http:HttpClient) { }

  getAllcities():Observable<City>{
    return this.http.get<City>(this.url)
  }
  getCityById(id:any):Observable<City> {
    return this.http.get<City>(this.url+"/"+id)
  }
  postCity(city:City):Observable<any> {
    return this.http.post<any>(this.url,city);
  }
  putCity(id:any,city:City):Observable<any> {
    return this.http.put<any>(this.url+"/"+id,city);
  }
  deleteCity(id:any){
    return this.http.delete(this.url+"/"+id);
  }
}
