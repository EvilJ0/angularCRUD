import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../service/crud.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EmployeeGroupService} from '../../service/employee-group.service';
import {EmployeeModel} from '../../model/employee';

@Component({
  selector: 'app-firebase-list-employee',
  templateUrl: './firebase-list-employee.component.html',
  styleUrls: ['./firebase-list-employee.component.css']
})
export class FirebaseListEmployeeComponent implements OnInit {
  public employeeList: EmployeeModel<any>[];
  employeeForm: FormGroup;


  constructor(public crudService: CrudService,

              public employeeGroupService: EmployeeGroupService) {
  }

  ngOnInit() {
    this.crudService.employees$.subscribe((response: EmployeeModel<any>[]) => {
      if (response) {
        this.employeeList = response;
        this.employeeForm = this.employeeGroupService.toFormGroupFB(this.employeeList);
        console.log (this.employeeList)
      }
    });

  }

  updateCurrentEmployee(key, currentEmployee, currentValue) {
    let updateEmployee = {};
    updateEmployee[currentEmployee] = currentValue;
    return this.crudService.update(key, updateEmployee);
  }



  testType(type) {
    if (typeof (type) === 'number') {
      return 'number';
    }
    return 'text';
  }

}
