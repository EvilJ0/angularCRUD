import { Injectable } from '@angular/core';
import {EmployeeModel} from '../model/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGroupService {

  constructor() { }

  toFormGroup(employees: EmployeeModel<any>[]){
    let group: any ={};

    employees.forEach(employee=>{
      group[employee.id]=employee.required ? new FormControl(employee.value ||"", Validators.required)
                                            : new FormControl(employee.value ||'');
    });
    console.log ("group : "+Object.keys(group))
    return new FormGroup(group)
  }
}
