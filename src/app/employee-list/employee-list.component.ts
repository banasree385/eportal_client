import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:IEmployee[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmpolyees()
    .subscribe((employees:IEmployee[])=>{
      this.employees=employees;
    })
  }

}
