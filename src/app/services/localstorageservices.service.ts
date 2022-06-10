import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageservicesService {

  constructor() { }

  setToLocalStorage(key: string, value: any){
    localStorage.setItem(key,JSON.stringify(value))
  }
  getFromLocalStorage(key:string): any{
    const currentStock =  localStorage.getItem(key);
    const stock = currentStock !== null ? JSON.parse(currentStock): null;
    return stock
    
  }
  deleteFromLocalStorage(key: string){
    localStorage.removeItem(key)
  }
}
