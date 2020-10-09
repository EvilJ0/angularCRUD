import {EmployeeModel} from './employee';
import {EmployeeOptions} from './employee-options';

export class EmployeeNumberBox extends EmployeeModel<number>{
  controlType="numberBox"
  type:string;
  constructor(options: EmployeeOptions) {
    super(options);
    this.type=options['type'] || "number"
  }
}
