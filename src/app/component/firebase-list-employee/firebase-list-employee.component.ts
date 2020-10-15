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
              public formBuilder: FormBuilder,
              public employeeGroupService: EmployeeGroupService) {
  }

  ngOnInit() {
    this.crudService.employees$.subscribe((response: EmployeeModel<any>[]) => {
      if (response) {
        this.employeeList = response;
        this.employeeForm = this.employeeGroupService.toFormGroupFB(this.employeeList);
        // console.log('List :' + Object.values(this.employeeList[0].value) );
        // console.log('Form values:' +  Object.values(this.employeeForm[0]));
        // console.log('Form keys:' +  Object.keys(this.employeeForm[0]));
        // console.log('Form controls:' +  this.employeeForm.controls);
        // console.log('Form :' +  this.employeeForm);
      }
    });
  }

  updateCurrentEmployee(key, currentEmployee, currentValue) {
    let updateEmployee = {};
    updateEmployee[currentEmployee] = currentValue;
    return this.crudService.update(key, updateEmployee);
  }

  deleteCurrentEmployee(key) {
    return this.crudService.delete(key);
  }

  testType(type) {
    if (typeof (type) === 'number') {
      return 'number';
    }
    return 'text';
  }

  getControlKeys(employeeForm){
    let controlKeys=Object.keys(this.employeeForm)
   return controlKeys
  }
}
