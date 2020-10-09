import {EmployeeModel} from './employee';
import {EmployeeOptions} from './employee-options';

export class EmployeeTextBox extends EmployeeModel<string>{
  controlType="textBox";
  type: string;
  constructor(options: EmployeeOptions) {
    super(options);

    this.type=options['type']  || "text";
  }
}
