import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from '../../model/employee';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent {

  @Input()
  public employee: EmployeeModel<any>;
  @Input()
  form: FormGroup;




}
