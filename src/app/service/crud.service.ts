import {Injectable} from '@angular/core';

import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = '/';
  urlProfiles = this.url + 'profiles/';
  urlFileTree = this.url + 'fileTree/';

  employees$;
  tree$;

  constructor(public fireServices: AngularFireDatabase) {
    this.employees$ = fireServices.list(this.urlProfiles).snapshotChanges()
      .pipe(
        map(receivedEmployee => receivedEmployee.map(R => ({
            key: R.payload.key, ...R.payload.val,
            value: R.payload.toJSON(), ...R.payload.val
          })
          )
        )
      );
    this.tree$ = fireServices.list(this.urlFileTree).snapshotChanges()
      .pipe(
        map(receivedTree => receivedTree.map(R => ({
            key: R.payload.key, ...R.payload.val,
            value: R.payload.toJSON(), ...R.payload.val
          })
          //
          )
        )
      );

  }


  createNewEmployee(newEmployee) {
    return this.fireServices.database.ref(this.urlProfiles).push(newEmployee);
  }

  update(key, newEmployeeValue) {
    console.log('Updating :' + key + ', ' + Object.values(newEmployeeValue), ', ' + Object.keys(newEmployeeValue));
    return this.fireServices.database.ref(this.urlProfiles).child(key).update(newEmployeeValue);
  }

  deleteProfile(key) {
    return this.fireServices.database.ref(this.urlProfiles).child(key).remove();
  }

  deleteField(key){
    return this.fireServices.database.ref(this.urlFileTree).child(key).remove()
  }

  updateEmployeeTree(newField){
    return this.fireServices.database.ref(this.urlFileTree).update(newField)
  }

  // createEmployeesTree(employeeTree) {
  //   return this.fireServices.database.ref(this.urlFileTree).child(`/`).update(employeeTree);
  // }


}
