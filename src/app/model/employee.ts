import { EmployeeOptions } from './employee-options';

export class EmployeeModel<T> {
  value: T;
  id: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  key: string;
  options: {};
  // name?: string;
  // age?: number;
  // address?: string;
  constructor(options: EmployeeOptions) {
    this.value = options.value;
    this.id = options.id || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.options = options['options'] || [];

  }

}

