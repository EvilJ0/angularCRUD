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
// public inputValue;

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
  console.log(this.employeeForm.value)
}
buildControls(){
    let controls= {};
    let employeeKeys=Object.keys(this.employeeList[0].value)

    for (let prop of employeeKeys){
      // console.log ("Prop :"+prop)
      // console.log (this.employeeList[0].value.hasOwnProperty(prop))

        controls[`employee-${prop}`]= new FormControl([''])

// console.log(controls)
    }
  // console.log ("controls :"+Object.keys(controls))
  // console.log ("working")

    return controls

}
buildProp(){

}

  // getArr(importEmployee){
  //   let test =Object.values(importEmployee)
  //
  //   console.log(Object.values(test[1]));
  //   return Object.values(test[1])
  // }


  getKeyByValue(object, value) {

    return Object.keys(object).find(key => object[key] === value);

  }

  updateCurrentEmployee(key, currentEmployee, currentValue) {
    let updateEmployee = {};
    updateEmployee[currentEmployee] = currentValue;
    // console.log("Employee: "+ currentEmployee)
    // console.log("Value :"+ currentValue)
    // console.log("Id update :"+ updateEmployeeId)

    console.log (updateEmployee)
    console.log (key)
    console.log (this.employeeForm.value)
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



