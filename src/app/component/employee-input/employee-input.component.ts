import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from '../../model/employee';
import {FormGroup} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent {
constructor(public employeeService: EmployeeService) {
}
  @Input()
  public employee: EmployeeModel<any>;
  @Input()
  form: FormGroup;

  employeeSectionDelete(employee){
    this.employeeService.deleteSection(employee)
  }


}
