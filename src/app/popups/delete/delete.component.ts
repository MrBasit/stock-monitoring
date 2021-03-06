import { SharedService } from './../../shared.service';
import { LocalstorageservicesService } from 'src/app/services/localstorageservices.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TrackedStocksComponent } from 'src/app/components/tracked-stocks/tracked-stocks.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  currentStock: [] = [];
  currentName: string= '';
  constructor(private storageServices: LocalstorageservicesService, @Inject(MAT_DIALOG_DATA) private dialogData: any,private service: SharedService,
private dialogRef: MatDialogRef<TrackedStocksComponent>) { }

  ngOnInit(): void {
    this.currentName = this.dialogData.name;
    this.currentStock = this.storageServices.getFromLocalStorage('stock');
  }
  delete(){
      let itemToBeDeleted=[];
      this.currentStock.forEach((element: any) => {
          if(element.name === this.currentName){
              let i = (this.currentStock as []).indexOf(element as never);
              (this.currentStock as []).splice(i,1)
              // itemToBeDeleted.push(element);
          }
        }
      )
      // itemToBeDeleted.forEach(e=>{
      //   let i = this.currentStock.indexOf(e as never);
      //   this.currentStock.splice(i,1);
      // })
    this.storageServices.setToLocalStorage('stock',this.currentStock)
    this.service.emitRecordChange('delete');
    this.dialogRef.close();
  }
  cancel(){

  }



}
