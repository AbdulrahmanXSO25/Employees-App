import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<any> {
    return this.http.get("https://localhost:44309/api/Employee");
  }
  deleteEmployee(id:any){
    return this.http.delete("https://localhost:44309/api/Employee/"+id);
  }
}
