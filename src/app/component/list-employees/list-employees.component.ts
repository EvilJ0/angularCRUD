import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../service/crud.service';
import {EmployeeModel} from '../../model/employee';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  public employeeList: EmployeeModel[];
  public employeeForm: FormGroup;

  constructor( public crudService: CrudService,
               public formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.crudService.employees$.subscribe( resp => {
      if (resp) {
        this.employeeList = resp;
        this.buildForm();
        console.log(this.employeeList);
      }
    });
  }

  buildForm() {
    this.employeeForm = this.formBuilder.group({
      [`employee-name`]: new FormControl(''),
      [`employee-age`]: new FormControl(''),
      [`employee-address`]: new FormControl('')
    });
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  updateCurrentEmployee(key, currentEmployee, currentValue) {
    let updateEmployeeId = this.getKeyByValue(currentEmployee, currentValue)
    let updateEmployee = {};
    updateEmployee[updateEmployeeId] = currentValue;
    console.log (updateEmployee)
    console.log (key)
    return this.crudService.update(key, updateEmployee);
  }

  deleteCurrentEmployee(key) {
    return this.crudService.delete(key);
  }

  sectionIdEmployeeValue(value){

  }
}



