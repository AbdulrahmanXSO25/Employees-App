import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }


  baseUrl:string = "http://abdulrahmanxso25-001-site1.atempurl.com/api/Employee";

  getAllEmployees():Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getEmployeeById(id:any):Observable<any>{
    return this.http.get<Employee>(this.baseUrl+"/"+id)
  }
  postEmployee(employee:Employee){
    return this.http.post<any>(this.baseUrl,employee);
  }
  putEmployee(employee:Employee,id:any){
    return this.http.put<any>(this.baseUrl+"/"+id,employee);
  }
  deleteEmployee(id:any){
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
