import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from "@angular/fire"
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {CrudService} from './service/crud.service';

import { ListEmployeesComponent } from './component/list-employees/list-employees.component';
import { NewEmployeeComponent } from './component/new-employee/new-employee.component';
import { EmployeeInputComponent } from './component/employee-input/employee-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    NewEmployeeComponent,
    EmployeeInputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,

    // AppRoutingModule,

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
