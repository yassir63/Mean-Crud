import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]  // necessary ???
})
export class EmployeeComponent implements OnInit {

  constructor( public employeeService : EmployeeService ) { }

  onSubmit(formValue: NgForm){
    if(formValue.value._id == ""){
      this.employeeService.postEmployee(formValue.value).subscribe((res) => {
        this.resetForm(formValue);
        this.refreshList();
      })
    }else{


    this.employeeService.putEmployee(formValue.value).subscribe((res) => {
      this.resetForm(formValue);
        })
    // console.log(formValue.value)
      }}

  resetForm(form? : NgForm ){
    if(form){
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id:"",
      name: "",
      position: "",
      office: "",
      salary: 0,
    }
  }

  onEdit(emp : Employee){
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id:string,form :NgForm){
    if(confirm('Are you sure to delete this employee ?') == true){
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshList();
        this.resetForm(form);
      });
    }
  }

  refreshList(){
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    })
  }

  ngOnInit(): void {
    this.resetForm();
    this.refreshList();
  }

}
