import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CrudService} from '../../service/crud.service';
import {EmployeeModel} from '../../model/employee';
import {EmployeeGroupService} from '../../service/employee-group.service';

@Component({
  selector: 'app-firebase-employee',
  templateUrl: './firebase-employee.component.html',
  styleUrls: ['./firebase-employee.component.css']
})
export class FirebaseEmployeeComponent {
  constructor(public crudService: CrudService,
              public employeeGroupService: EmployeeGroupService) {
  }

  @Input()
  public fireBaseEmployee: EmployeeModel<any>;
  @Input()
  employeeFormSection: FormGroup;


  updateCurrentEmployee(key, currentEmployee, currentValue) {
    let updateEmployee = {};
    updateEmployee[currentEmployee] = currentValue;
    return this.crudService.update(key, updateEmployee);
  }


  inputType(section) {

    if (section == 'age') {
      return 'number';
    } else {
      return 'text';
    }
  }

  valueTest(input) {
    if (input.value == '' || input.value < 18) {
      return true;
    } else {
      return false
    }
  }
}


