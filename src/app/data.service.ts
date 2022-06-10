import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllStockRecords(symbols:string[]){
    let joinedsymbols = symbols.join('%2C');
    return this.http.get('https://api.stockdata.org/v1/data/quote?symbols='+joinedsymbols+'&api_token=Pa02jOUguiQuf2SSV6im0QUPx7WCrzQcX1dJN13W');
  }
  }

