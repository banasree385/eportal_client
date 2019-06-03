import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../employee.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IEmployee } from '../Employee';
import { of } from "rxjs/observable/of";
import { By } from '@angular/platform-browser';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let mockEmployeeService;
  let  employees:IEmployee[];

  beforeEach(() => {
    mockEmployeeService=jasmine.createSpyObj(['getEmpolyees']);
    employees=[{"id":1,"firstName":"Banasree","lastName":"Saha","gender":"F","dobObj":"1990-01-01","dobFormatted":null,"department":"ECE"},
                {"id":2,"firstName":"Banani","lastName":"Saha","gender":"F","dobObj":"1990-01-01","dobFormatted":null,"department":"EE"}]
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      providers:[{provide:EmployeeService,useValue:mockEmployeeService}],
      schemas:[NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(EmployeeListComponent);
  });

  it('should set employees correctly from service ', () => {
    mockEmployeeService.getEmpolyees.and.returnValue(of(employees));
    fixture.detectChanges();
    expect(fixture.componentInstance.employees.length).toBe(2);
  });

  it('should create one tr for each employee', () => {
    mockEmployeeService.getEmpolyees.and.returnValue(of(employees));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('tr')).length).toBe(3);
  });
});
