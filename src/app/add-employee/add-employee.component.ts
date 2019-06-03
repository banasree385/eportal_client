import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employee.service';
import {IMyDpOptions, IMyDate} from 'mydatepicker';
import {Router} from '@angular/router';
import { JsonPipe } from '@angular/common';




@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 pageTitle:string="Add Employee";
 employeeForm:FormGroup;
 employee:IEmployee;
 errMessage:string;
 public myDatePickerOptions: IMyDpOptions = {
  // other options...
  dateFormat: 'dd.mm.yyyy',
};
  constructor(private fb:FormBuilder,
              private employeeService:EmployeeService,
              private router:Router,) { }

  ngOnInit():void {
    this.employeeForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',Validators.required],
      gender:['',Validators.required],
      dobObj:[null,Validators.required],
      department:['',Validators.required],
     
    });
   
  }

  saveEmployee():void{
    if(this.employeeForm.dirty&&this.employeeForm.valid){
      let e=Object.assign({},this.employee,this.employeeForm.value);
      e.dobFormatted=e.dobObj.formatted;
      console.log("form"+JSON.stringify(this.employeeForm.value));
      this.employeeService.saveEmpolyee(e)
      .subscribe(
        ()=>this.onSaveComplete(),
        (error:any)=>this.errMessage=<any>error
      )
    }
    else if(!this.employeeForm.dirty){
      this.onSaveComplete();
    }
  }
       
  onSaveComplete():void{
    this.employeeForm.reset();
    this.router.navigate(['/employees']);
    }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.employeeForm.patchValue({myDate: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
}

clearDate(): void {
    // Clear the date using the patchValue function
    this.employeeForm.patchValue({myDate: null});
}



}
