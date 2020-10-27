import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewEmployeeComponent} from './component/new-employee/new-employee.component';
import {FormEmployeeTreeComponent} from './component/form-employee-tree/form-employee-tree.component';

const routes: Routes = [
  {
    path: 'form-employee',
    component: NewEmployeeComponent
  },
  {
    path: 'form-employee-tree',
    component: FormEmployeeTreeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
