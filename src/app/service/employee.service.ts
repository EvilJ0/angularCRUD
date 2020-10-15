import {Injectable} from '@angular/core';
import {EmployeeModel} from '../model/employee';
import {EmployeeTextBox} from '../model/employee-textBox';
import {EmployeeNumberBox} from '../model/employee-numberBox';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeSections: EmployeeModel<any>[] = [];
  // sections = {
  //   name: 'EmployeeTextBox',
  //   age: 'EmployeeNumberBox',
  //   address: 'EmployeeTextBox',
  //   skill: 'EmployeeTextBox',
  //   work: 'EmployeeTextBox',
  // };
  sections = {
    name: 'EmployeeTextBox',
    age: 'EmployeeNumberBox',
    address: 'EmployeeTextBox',
    skill: 'EmployeeTextBox',
    // work: 'EmployeeTextBox',
  };

  constructor(public crudService: CrudService) {
  }

  getEmployee() {
    for (let key of Object.keys(this.sections)) {
      if (this.sections[key] == 'EmployeeTextBox') {
        this.pushTexBox(key);

      } else {
        this.pushNumberBox(key);
      }
    }
    this.crudService.createEmployeesTree(this.sections);
    return this.employeeSections;
  }

  pushTexBox(value) {
    console.log(value);
    return this.employeeSections.push(new EmployeeTextBox({
        id: value,
        label: value,
        required: true,
      })
    );
  }

  pushNumberBox(value) {
    console.log(value);
    return this.employeeSections.push(new EmployeeNumberBox({
        id: value,
        label: value,
        required: true,
      })
    );
  }

  deleteSection(employeeField){
    console.error(`employeeField ${employeeField} deleted`)
    delete this.sections[employeeField]
  }


}
// import {Injectable} from '@angular/core';
// import {EmployeeModel} from '../model/employee';
// import {EmployeeTextBox} from '../model/employee-textBox';
// import {EmployeeNumberBox} from '../model/employee-numberBox';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {
//   getEmployee() {
//     let employeeSections: EmployeeModel<any>[]=[
//       new EmployeeTextBox({
//         id: "name",
//         label: "Name",
//         required: true,
//         order:1
//       }),
//       new EmployeeNumberBox({
//         id: "age",
//         label: "Age",
//         required: true,
//         order:2
//       }),
//       new EmployeeTextBox({
//         id: "address",
//         label: "Address",
//         required: true,
//         order:3
//       }),
//       new EmployeeTextBox({
//         id: "skill",
//         label: "Skill",
//         required: true,
//         order:3
//       }),
//     ];
//     return employeeSections.sort(((a, b) => a.order-b.order))
//   }
// }



