import { LocalstorageservicesService } from './../../services/localstorageservices.service';
import { AddStockComponent } from './../../popups/add-stock/add-stock.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
 Stock_List_Data:StockValues[]=[];
 displayedColumns = ['Name','Symbol', 'Current Value', 'Change', 'Action'];
 public dataSource: StockValues[];
 dialogconfig = new MatDialogConfig();
 data={}
 
  constructor(private dialog: MatDialog, private fb: FormBuilder, private dataService:DataService, private storageServices: LocalstorageservicesService) {}

  ngOnInit(): void {
    console.log('getting all recored');
    this.dataService.getAllStockRecords(['AAPL','TSLA','MSFT']).subscribe(
      (r:any)=>{
        let data:[] = r['data'];
        data.forEach(e => {
          console.log('e => ', e);
          this.Stock_List_Data.push({symbol:e['ticker'],name:e['name'],currentValue:e['price'],change:100});
        });
        this.dataSource=this.Stock_List_Data;
      },
      (e) => {
        console.log(e);
        this.Stock_List_Data = [
          {symbol: 'abc', name: 'Hydrogen', currentValue: 0, change: 8 },
          {symbol: 'efg', name: 'Helium',   currentValue: 0, change: 8 },
          {symbol: 'mnm', name: 'Lithium',  currentValue: 0,  change: 8 },
          {symbol: 'ggg', name: 'Beryllium',currentValue: 0, change: 8 },
          {symbol: 'ssx', name: 'Boron',    currentValue: 0, change: 8 }
        ]
        this.dataSource=this.Stock_List_Data;
      }
    )
  }

  addPopup(target:any){
    //check existance of symbol in localstorage
    let isExist= false;
    (this.storageServices.getFromLocalStorage('stock') as [] ).forEach(e=>{
      if(e['symbol'] == target.symbol){
        isExist=true;
        console.log('found');
        // break;
      }
    })

    if(isExist){
      alert('this symbol is already getting tracked');
    }
    else{
      this.dialog.open(AddStockComponent, {
        width: '400px',
        data : target
      })
    }
    ;
  }
}

export interface StockValues{
  name: string;
  symbol: string;
  currentValue: number;
  change: number;
}
