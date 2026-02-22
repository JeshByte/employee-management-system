import { Injectable,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  baseUrl:string="http://localhost:8080/api";
  getEmployees():Observable<any>{
    return this.http.get(this.baseUrl+"/employees");
  }
  getEmployee(id:number):Observable<any>{
    return this.http.get(this.baseUrl+`/employees/${id}`);
  }
  addEmployee(data:any):Observable<any>{
    return this.http.post(this.baseUrl+"/employees",data);
  }
  updateEmployee(data:any,id:number):Observable<any>{
    return this.http.put(this.baseUrl+`/employees/${id}`,data);
  }
  deleteEmployees():Observable<any>{
    return this.http.delete(this.baseUrl+"/employees");
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+`/employees/${id}`);
  }
}
