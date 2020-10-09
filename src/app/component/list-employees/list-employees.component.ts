import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../service/crud.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
public employeeList;
public employeeForm;


  constructor(public crudService: CrudService,
              public  formBuilder: FormBuilder) {}
ngOnInit(){
    this.crudService.employees$.subscribe(response=>{
      if(response){
        this.employeeList=response
        this.buildForm();
        console.log(this.employeeList)
      }
    })
}
buildForm(){
    this.employeeForm=this.formBuilder.group(this.buildControls())
}
buildControls(){
    let controls= {};
    let employeeKeys=Object.keys(this.employeeList[0].value)
    for (let prop of employeeKeys){
        controls[`employee-${prop}`]= new FormControl([''])
    }
    return controls
}


  getKeyByValue(object, value) {

    return Object.keys(object).find(key => object[key] === value);

  }

  updateCurrentEmployee(key, currentEmployee, currentValue) {
    let updateEmployee = {};
    updateEmployee[currentEmployee] = currentValue;
    return this.crudService.update(key, updateEmployee);
  }

  deleteCurrentEmployee(key) {
    return this.crudService.delete(key);
  }
testType(type){
    if (typeof(type)==="number"){
      return "number"
    }return "text"

}
}



