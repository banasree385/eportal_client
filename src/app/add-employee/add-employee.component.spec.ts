import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { EmployeeService } from '../employee.service';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let mockEmployeeService;

  beforeEach(async(() => {
    mockEmployeeService=jasmine.createSpyObj(['getEmpolyees']);
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      providers:[{provide:EmployeeService,useValue:mockEmployeeService}],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
