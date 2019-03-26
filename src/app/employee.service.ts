import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import  "rxjs/add/operator/map";
import  "rxjs/add/operator/catch";
import  "rxjs/add/operator/do";
import { IEmployee } from './Employee';
@Injectable()
export class EmployeeService {
  //private _employeeUrl='http://localhost:8080/eportal/v1/employees';
  private _baseUrl='/api/'
  private _employeeUrl=this._baseUrl+'employees';
  constructor(private _http:HttpClient) { }
  getEmpolyees():Observable<IEmployee[]>{
    return this._http.get(this._employeeUrl)
    .map(this.extractData)
    .do(data=>console.log('the data are=>   '+JSON.stringify(data)))
    .catch(this.handleError);
}


saveEmpolyee(employee:IEmployee):Observable<IEmployee>{
  let headers=new HttpHeaders({'ContentType':'application/json'});
  let options={headers:headers}; 
  return this.createEmployee(employee,options);
 ;
}

private createEmployee(employee:IEmployee,options):Observable<IEmployee>{
  employee.id=undefined;
  return this._http.post(this._employeeUrl,employee,options)
  .do(data=>console.log('create Employee'+JSON.stringify(data)))
  .catch(this.handleError)
}

private extractData(response: Response) {
  return response['employeeList'];
}
private handleError(error:HttpErrorResponse): Observable<any> {
  console.log("error"+JSON.stringify(error));
  console.log("error"+error["body"]["error"]);

return Observable.throw(error.error.json|| 'Server error');
}

}
