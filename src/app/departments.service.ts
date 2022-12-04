import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "https://localhost:44309/api/Department"

  getAllDepartments():Observable<any> {
    return this.http.get<Department>(this.baseUrl);
  }
  getDepartmentById(id:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+"/"+id)
  }
  postDepartment(department:Department){
    return this.http.post<any>(this.baseUrl,department);
  }
  putDepartment(department:Department,id:any){
    return this.http.put<any>(this.baseUrl+"/"+id,department);
  }
  deleteDepartment(id:any){
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
