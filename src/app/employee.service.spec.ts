import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'

import { EmployeeService } from './employee.service';
import { IEmployee } from './Employee';

describe('EmployeeService', () => {
  let httpTestingController:HttpTestingController;
  let  employees:IEmployee[];

  beforeEach(() => {
    employees=[{"id":1,"firstName":"Banasree","lastName":"Saha","gender":"F","dobObj":"1990-01-01","dobFormatted":null,"department":"ECE"},
    {"id":2,"firstName":"Banani","lastName":"Saha","gender":"F","dobObj":"1990-01-01","dobFormatted":null,"department":"EE"}]
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [EmployeeService]
    });
    //httpTestingController=TestBed.get(HttpTestingController);
  });

describe('getEmployees',()=>{
  it('shoul call getEmployees with the correct url',
  inject([EmployeeService,HttpTestingController],
     (service: EmployeeService,controller:HttpTestingController)=>{
service.getEmpolyees().subscribe();
const req=controller.expectOne('/api/employees');
req.flush(employees);
  }))
})

/* 
  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy(); 
  }));*/
});

