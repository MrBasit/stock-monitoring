import { AddStockComponent } from './../../popups/add-stock/add-stock.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
 displayedColumns = ['Name','Symbol', 'Current Value', 'Change', 'Action'];
 dataSource: Array<StockValues> = Stock_List_Data;
 dialogconfig = new MatDialogConfig();
 data={}
 
  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    // this.http.get('api.stockdata.org/v1/data/quote HTTP/1.1').subscribe(r =>{
    //   console.log(r)
    // })
   }

  ngOnInit(): void {
  }


  addPopup(target:any){
    this.dialog.open(AddStockComponent, {
      width: '400px',
      data : target
    })
    
  }
}

export interface StockValues{
  name: string;
  symbol: string;
  currentValue: number;
  change: number;
}

const Stock_List_Data: StockValues[] = [
  {symbol: 'abc', name: 'Hydrogen', currentValue: 0, change: 8 },
  {symbol: 'efg', name: 'Helium',   currentValue: 0, change: 8 },
  {symbol: 'mnm', name: 'Lithium',  currentValue: 0,  change: 8 },
  {symbol: 'ggg', name: 'Beryllium',currentValue: 0, change: 8 },
  {symbol: 'ssx', name: 'Boron',    currentValue: 0, change: 8 }
];
