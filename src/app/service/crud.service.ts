import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = '/';
  urlProfiles=this.url+'profiles/'

  employees$;

  constructor(public fireServices: AngularFireDatabase) {
    this.employees$ = fireServices.list(this.urlProfiles).snapshotChanges()
      .pipe(
        map( receivedEmployee => receivedEmployee.map( R => ({
              key: R.payload.key, ...R.payload.val,
              value: R.payload.toJSON(),...R.payload.val
            })
          )
        )
      );
  }



  createNewEmployee(newEmployee) {
    return this.fireServices.database.ref(this.urlProfiles).push(newEmployee);
  }

  update(key, newEmployeeValue) {
    console.log("Updating :"+key+", "+Object.values(newEmployeeValue), ", "+Object.keys(newEmployeeValue) )
     return this.fireServices.database.ref(this.urlProfiles).child(key).update(newEmployeeValue)
  }

  delete(key){
    return this.fireServices.database.ref(this.urlProfiles).child(key).remove()
  }

  createEmployeesTree(employeeTree){
    return this.fireServices.database.ref(this.url).child(`fileTree`).update(employeeTree);

  }



}
