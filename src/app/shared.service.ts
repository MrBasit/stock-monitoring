import { ThrowStmt } from '@angular/compiler';
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

  reloadDataSource = new Subject<any>();
  reloadData = this.reloadDataSource.asObservable();

  emitReloadData(data){
    this.reloadDataSource.next(data);
  }
}
