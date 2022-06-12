import { Injectable } from '@angular/core';
import { yearsPerPage } from '@angular/material/datepicker';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  recordChangeSource= new Subject<any>();
  recoredChanged=this.recordChangeSource.asObservable();

  emitRecordChange(type:any){
    this.recordChangeSource.next(type);
  }
}
