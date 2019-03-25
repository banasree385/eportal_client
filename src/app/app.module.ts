import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService} from './employee.service';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    RouterModule.forRoot([
     
      {path:'employees',component:EmployeeListComponent},
      {path:'addEmployee',component:AddEmployeeComponent}, 
      {path:'welcome',component:HomeComponent}, 
      {path:'',redirectTo:'welcome',pathMatch:'full'} ,
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
  
    ]),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
