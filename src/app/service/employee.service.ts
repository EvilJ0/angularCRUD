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
  sections;

  constructor(public crudService: CrudService) {
  }

  getEmployee(responseFromNewEmployee) {
    console.log(responseFromNewEmployee);
    let sectionsFireBase = {};

    for (let i = 0; i <= Object.keys((responseFromNewEmployee)).length - 1; i++) {
      sectionsFireBase[responseFromNewEmployee[i].key] = responseFromNewEmployee[i].value;
    }
    this.sections = sectionsFireBase;

    // console.log('sections from file: ' + Object.values(this.sections));
    this.employeeSections = [];
    for (let key of Object.keys(this.sections)) {
      // console.error(this.sections[key])
      if (this.sections[key] === 'EmployeeNumberBox') {
        this.pushNumberBox(key);
      } else {
        this.pushTextBox(key);
      }
    }
    // this.crudService.createEmployeesTree(this.sections);
    return this.employeeSections;
  }

  pushTextBox(value) {
    // console.log(value);
    return this.employeeSections.push(new EmployeeTextBox({
        id: value,
        label: value,
        required: true,
      })
    );
  }

  pushNumberBox(value) {
    // console.log(value);
    return this.employeeSections.push(new EmployeeNumberBox({
        id: value,
        label: value,
        required: true,
      })
    );
  }

  deleteSection(employeeField) {
    console.log(`employeeField ${employeeField} deleted`);
    delete this.sections[employeeField];
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



