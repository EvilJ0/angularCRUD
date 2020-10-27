import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from '../../model/employee';
import {CrudService} from '../../service/crud.service';
import {FormGroup} from '@angular/forms';
import {EmployeeGroupService} from '../../service/employee-group.service';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  form: FormGroup;
  employeeFields: EmployeeModel<any>[] = [];
  massage: string;
  newEmployee: EmployeeModel<any>;
  employee: EmployeeModel<any>;

  constructor(public crudService: CrudService,
              public employeeGroupService: EmployeeGroupService,
              public employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.crudService.tree$.subscribe((response: {}) => {
      if (response) {

        this.employeeFields = this.employeeService.getEmployee(response);

        this.form = this.employeeGroupService.toFormGroup(this.employeeFields);
        // console.log(this.employeeFields)
      }
    });


  }

  formSubmit() {
    console.log(this.form.value);
    this.newEmployee = this.form.value;
    this.crudService.createNewEmployee(this.newEmployee).then(
      result => {
        console.log(result);
        this.massage = `Employee data save: ${result.toJSON()} `;
      }
    ).catch(error => console.log(error));
    this.form.reset();
  }


}
