import { LocalstorageservicesService } from './../../services/localstorageservices.service';
import { AddStockComponent } from './../../popups/add-stock/add-stock.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
 spinner: boolean = true;
 
  constructor(private dialog: MatDialog, private fb: FormBuilder, private dataService:DataService, private storageServices: LocalstorageservicesService,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    console.log('getting all recored');
    this.dataService.getAllStockRecords(['AAPL','TSLA','MSFT']).subscribe(
      (r:any)=>{
        this.spinner = false;
        let data:[] = r['data'];
        data.forEach(e => {
          console.log('e => ', e);
          let change = e['price'] - e['day_open'];
          change = Math.round((change / e['price']) * 100); 
          this.Stock_List_Data.push({symbol:e['ticker'],name:e['name'],currentValue:e['price'],change:change});
        });
        this.dataSource=this.Stock_List_Data;
      },
      (e) => {
        this.spinner = false;
        console.log(e);
        this.Stock_List_Data = [
          {symbol: 'hyd', name: 'Hydrogen', currentValue: 0, change: 8 },
          {symbol: 'hel', name: 'Helium',   currentValue: 0, change: 8 },
          {symbol: 'lit', name: 'Lithium',  currentValue: 0,  change: 8 },
          {symbol: 'bery', name: 'Beryllium',currentValue: 0, change: 8 },
          {symbol: 'bor', name: 'Boron',    currentValue: 0, change: 8 }
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
        // break;
      }
    })

    if(isExist){
      this._snackBar.open(target.name + ' symbol is already getting tracked', "close")
    }
    else{
      let dialogRef = this.dialog.open(AddStockComponent, {
        width: '400px',
        data : target
      })
      
      dialogRef.afterClosed().subscribe(s=> {
        this._snackBar.open(s.name + ' ' + 'tracked successfully', 'close')
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
