import {Injectable} from '@angular/core';
import {EmployeeModel} from '../model/employee';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGroupService {

  constructor() {
  }

  toFormGroup(employees: EmployeeModel<any>[]) {
    let group: any = {};

    employees.forEach(employee => {
      if (employee.id) {
        group[employee.id] = employee.required ? new FormControl(employee.value || '', Validators.required)
          : new FormControl(employee.value || '');
      }
    });
   
    return new FormGroup(group);
  }


  toFormGroupFB(employees: EmployeeModel<any>[]) {
    let groupFB: any = [];
    for (let i = 0; i <= employees.length - 1; i++) {
      // console.log(`${i} element is:`)
      groupFB[i] = this.getFormGroupArray(employees[i]);
      // console.log(groupFB[i])
    }
    return groupFB;
  }

  getFormGroupArray(employeeElement: EmployeeModel<any>) {

    let groupOfEmployeeElement: any = {};
    let employeeElementKeys = Object.keys(employeeElement.value);
    for (let prop of employeeElementKeys) {
      groupOfEmployeeElement[prop] = new FormControl('', Validators.required);
      // console.log("prop: "+prop)
    }

    return new FormGroup(groupOfEmployeeElement);
  }
}
