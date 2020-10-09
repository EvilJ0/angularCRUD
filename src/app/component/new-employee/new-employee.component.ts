import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from '../../model/employee';
import {CrudService} from '../../service/crud.service';
import {FormGroup} from '@angular/forms';
import {EmployeeGroupService} from '../../service/employee-group.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  form: FormGroup;
  @Input() employees: EmployeeModel<any>[]=[]
  massage: string
  newEmployee:EmployeeModel<any>

  constructor(public crudService: CrudService,
              public employeeGroupService: EmployeeGroupService) {
  }

  ngOnInit():void{
    this.form=this.employeeGroupService.toFormGroup(this.employees)
  }

  formSubmit() {
    console.log(this.form.value)
    this.newEmployee=this.form.value
    this.crudService.createNewEmployee(this.newEmployee).then(
      result=>{
        console.log(result);
        this.massage=`Employee data save: ${result.toJSON()} `
      }
    ).catch(error=> console.log(error))
    this.form.reset()
  }

}
