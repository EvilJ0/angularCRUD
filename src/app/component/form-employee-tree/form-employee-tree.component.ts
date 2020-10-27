import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CrudService} from '../../service/crud.service';
import {EmployeeService} from '../../service/employee.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeGroupService} from '../../service/employee-group.service';

@Component({
  selector: 'app-form-employee-tree',
  templateUrl: './form-employee-tree.component.html',
  styleUrls: ['./form-employee-tree.component.css']
})
export class FormEmployeeTreeComponent implements OnInit {
  // @ViewChild('canvas', { static: true })
  // canvas: ElementRef<HTMLCanvasElement>;
  // public ctx: CanvasRenderingContext2D;
  viewMode = 'empty';
  selectType = 'empty';
  employeeFields;
  form: FormGroup;
  formField: FormGroup;
  type;

  constructor(public crudService: CrudService,
              public employeeService: EmployeeService,
              fb: FormBuilder,
              public employeeGroupService: EmployeeGroupService) {
    this.form = fb.group({
      nameField: ['', Validators.required],
      typeField: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.crudService.tree$.subscribe((response: {}) => {
      if (response) {
        this.employeeFields = response;
        // this.employeeFields = this.employeeService.getEmployee(response);
      }
    });
    // this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  newField(Field) {
    let newField = {};
    newField[Field.nameField] = Field.typeField;
    this.crudService.updateEmployeeTree(newField);
    this.cancel()


  }

  draw() {
    // this.ctx.moveTo(0,0);
    // this.ctx.lineTo(0,40);
    // this.ctx.lineWidth = 10;
    // this.ctx.stroke();
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(0,20);
    // this.ctx.lineTo(50, 20);
    // this.ctx.lineWidth = 5;
    // this.ctx.stroke();
  }

  testType(value) {
    if (value == 'EmployeeTextBox') {
      this.selectType = 'text';
    } else {
      if (value == 'EmployeeNumberBox') {
        this.selectType = 'number';
      }
    }
  }

  typeTranslate(value) {
    if (value === 'EmployeeNumberBox') {
      this.type = 'number';
    } else {

        this.type = 'text';

    }
    return this.type;
  }

  cancel() {
    this.viewMode = 'cancel';
    this.selectType = 'empty';
    this.form.reset();
  }

}
