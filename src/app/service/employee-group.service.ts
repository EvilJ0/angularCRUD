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
      group[employee.id] = employee.required ? new FormControl(employee.value || '', Validators.required)
        : new FormControl(employee.value || '');
    });
    console.log('group : ' + Object.keys(group));
    return new FormGroup(group);
  }

  // toFormGroupFB(employees: EmployeeModel<any>[]) {
  //   let lengthMax = 0;
  //   for (let i = 0; i < employees.length; i++) {
  //     if (Object.keys((employees[i]).value).length > lengthMax) {
  //       lengthMax = i
  //
  //     }
  //     console.log(i + " :"+typeof (((employees[i]).value).age))
  //   };
  //   console.log('Max Length on  :' + lengthMax);
  //
  //   let groupFB: any = {};
  //   let employeeKeys = Object.keys(employees[lengthMax].value);
  //   console.log('Employees keys :' + employeeKeys);
  //
  //   for (let prop of employeeKeys) {
  //     groupFB[prop] = new FormControl([''], Validators.required);
  //   }
  //
  //   // employees.forEach(prop=>{
  //   //   groupFB[.id]=employee.required ? new FormControl(employee.value ||"", Validators.required)
  //   //     : new FormControl(employee.value ||'');
  //   // });
  //   console.log('group FB: ' + Object.keys(groupFB));
  //   return new FormGroup(groupFB);
  // }

  toFormGroupFB(employees: EmployeeModel<any>[]) {
    let groupFB: any = [];
    for (let i = 0; i <= employees.length-1; i++) {
      console.log(`${i} element is:`)
      groupFB[i] = this.getFormGroupArray(employees[i])
      console.log(groupFB[i])
    }
    return groupFB
  }

  getFormGroupArray(employeeElement: EmployeeModel<any>){
    let groupOfEmployeeElement: any = {};
    let employeeElementKeys=Object.keys(employeeElement.value);
      for (let prop of employeeElementKeys) {
        groupOfEmployeeElement[prop] = new FormControl('', Validators.required);
        console.log("prop: "+prop)
      }

    return new FormGroup (groupOfEmployeeElement)
  }
}
