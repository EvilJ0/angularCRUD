import {Component} from '@angular/core';

import {CrudService} from './service/crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public crudService:CrudService) {


  }



}
