import {Component} from '@angular/core';
import {EmployeeModel} from './model/employee';
import {CrudService} from './service/crud.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee = new EmployeeModel();
  massage: string

  constructor(public crudService: CrudService) {
  }

  formSubmit() {
    this.crudService.createNewEmployee(this.employee).then(
      result=>{
        alert('Employee '+this.employee.name+' created');
        this.employee.name = '';
        this.employee.age = undefined;
        this.employee.address = '';
        console.log(result);
        this.massage=`Employee data seve: ${result.toJSON()} `
      }
    ).catch(error=> console.log(error))
  }


}
