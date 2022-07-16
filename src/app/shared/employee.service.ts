import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee = new Employee;
  employees: Employee[] = [];
  path = 'http://localhost:3000/employees';

  constructor(private http : HttpClient) { }

  postEmployee(emp : Employee) {
    return this.http.post(this.path,emp);
  }

  getEmployeeList(){
    return this.http.get(this.path);
  }

  putEmployee(emp : Employee){
    return this.http.put(this.path + `/${emp._id}`,emp);
  }

  deleteEmployee(_id : string){
    return this.http.delete(this.path + `/${_id}`);
  }
}
