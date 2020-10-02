import {Component} from '@angular/core';
import {CrudService} from '../../service/crud.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {


  constructor(public crudService: CrudService) {
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



