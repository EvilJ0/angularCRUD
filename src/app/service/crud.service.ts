import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = '/';
  employees$;

  constructor(public fireServices: AngularFireDatabase) {
    this.employees$ = fireServices.list(this.url).snapshotChanges()
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
    return this.fireServices.database.ref(this.url).push(newEmployee);
  }

  update(key, newEmployeeValue) {
    console.log("Updating :"+key+", "+Object.values(newEmployeeValue), ", "+Object.keys(newEmployeeValue) )
     return this.fireServices.database.ref(this.url).child(key).update(newEmployeeValue)
  }

  delete(key){
    return this.fireServices.database.ref(this.url).child(key).remove()
  }
}
