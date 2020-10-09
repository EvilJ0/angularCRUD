import {Component} from '@angular/core';
import {EmployeeModel} from './model/employee';
import {CrudService} from './service/crud.service';
import {error} from '@angular/compiler/src/util';
import {EmployeeService} from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: EmployeeModel<any>[];
  constructor(public employeeService: EmployeeService) {
    this.employees=employeeService.getEmployee()
  }



}
