import {Injectable} from '@angular/core';
import {EmployeeModel} from '../model/employee';
import {EmployeeTextBox} from '../model/employee-textBox';
import {EmployeeNumberBox} from '../model/employee-numberBox';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployee() {
    let employeeSections: EmployeeModel<any>[]=[
      new EmployeeTextBox({
        id: "name",
        label: "Name",
        required: true,
        order:1
      }),
      new EmployeeNumberBox({
        id: "age",
        label: "Age",
        required: true,
        order:2
      }),
      new EmployeeTextBox({
        id: "address",
        label: "Address",
        required: true,
        order:3
      }),
      new EmployeeTextBox({
        id: "skill",
        label: "Skill",
        required: true,
        order:3
      }),
    ];
    return employeeSections.sort(((a, b) => a.order-b.order))
  }
}
