import { City } from "./city.model";
import { Department } from "./department.model";

export interface Employee {
  EmployeeNameArabic:string;
  EmployeeNameEnglish:string;
  Dob:Date;
  HiringDate:Date;
  Salary:number;
  DepartmentId:number;
  CityId:number;
}
