import { LocalstorageservicesService } from './../../services/localstorageservices.service';
import { DeleteComponent } from './../../popups/delete/delete.component';
import { ViewStockComponent } from './../../popups/view-stock/view-stock.component';
import { AddStockComponent } from './../../popups/add-stock/add-stock.component';
import { EditStockComponent } from './../../popups/edit-stock/edit-stock.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tracked-stocks',
  templateUrl: './tracked-stocks.component.html',
  styleUrls: ['./tracked-stocks.component.scss']
})
export class TrackedStocksComponent implements OnInit {
  displayedColumns = ['Name','Symbol', 'Current Value', 'Min', 'Max', 'Expires', 'Action'];
  dataSource: Array<any> = [];
  @ViewChild('table') table!: MatTable<any>;
  constructor(
    private dialog: MatDialog,
    private storageServices: LocalstorageservicesService,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void {
    this.dataSource = this.storageServices.getFromLocalStorage('stock');
    this.sharedService.recoredChanged.subscribe(r=>{
      console.log('update tracked record here');
    })
  }
  openEditPopup(values: {}){
    this.dialog.open(EditStockComponent,{
      width: '400px',
      data: values
    })

  }
  openViewPopup(values: {}){
    this.dialog.open(ViewStockComponent,{
      width: '300px',
      data: values
    })
  }
  openDeletePopup(value: {}){
    this.dialog.open(DeleteComponent,{
      width: '250px',
      data: value,
    })
    
  }

}
