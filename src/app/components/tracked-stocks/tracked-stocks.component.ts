import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageservicesService } from './../../services/localstorageservices.service';
import { DeleteComponent } from './../../popups/delete/delete.component';
import { ViewStockComponent } from './../../popups/view-stock/view-stock.component';
import { EditStockComponent } from './../../popups/edit-stock/edit-stock.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tracked-stocks',
  templateUrl: './tracked-stocks.component.html',
  styleUrls: ['./tracked-stocks.component.scss'],
})
export class TrackedStocksComponent implements OnInit {
  displayedColumns = [
    'Name',
    'Symbol',
    'Current Value',
    'Min',
    'Max',
    'Expires',
    'Action',
  ];
  dataSource: Array<any> = [];
  @ViewChild('table') table!: MatTable<any>;
  constructor(
    private dialog: MatDialog,
    private storageServices: LocalstorageservicesService,
    private sharedService: SharedService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.sharedService.reloadData.subscribe((r:any[]) => {
      console.log('comparing prices and expiry ...');
      let TrackedStocks=this.storageServices.getFromLocalStorage('stock');
      TrackedStocks.forEach(e => {
          let index = (TrackedStocks as []).indexOf(e as never);
          let stockItem = r.find(_ => _.symbol == e.symbol)
          let currentItem = e;

          if(!currentItem.isLimitCrossed && (stockItem.currentValue<currentItem.minPrice || stockItem.currentValue>currentItem.maxPrice)){
            currentItem.isLimitCrossed=true;
            this.snackbar.open(currentItem.name + '\'s minimum/maximum limit crossed!', 'close');
          }

          if(!currentItem.isExpired && new Date().toISOString() > currentItem.date){
            currentItem.isExpired=true;
            this.snackbar.open(currentItem.name + ' is expired!', 'close');
          }

          (TrackedStocks as Array<any>).splice(index,1,currentItem);
          this.storageServices.setToLocalStorage('stock',TrackedStocks);
          this.dataSource=TrackedStocks;
        }
      )

    });
    this.dataSource = this.storageServices.getFromLocalStorage('stock');
    this.sharedService.recoredChanged.subscribe((r) => {
      this.dataSource = this.storageServices.getFromLocalStorage('stock');
    });
  }
  openEditPopup(values: any) {
    let dialogRef = this.dialog.open(EditStockComponent, {
      width: '400px',
      data: values,
    });
    dialogRef.afterClosed().subscribe((s) => {
      this.snackbar.open(
        values.name + ' ' + ' edited from tracked stocks list',
        'close'
      );
    });
  }
  openViewPopup(values: any) {
    this.dialog.open(ViewStockComponent, {
      width: '300px',
      data: values,
    });
  }
  openDeletePopup(value: any) {
    let dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px',
      data: value,
    });
    dialogRef.afterClosed().subscribe((s) => {
      this.snackbar.open(
        value.name + ' deleted from tracked stocks list',
        'close'
      );
    });
  }
}
