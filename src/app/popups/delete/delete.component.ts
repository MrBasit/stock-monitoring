import { LocalstorageservicesService } from 'src/app/services/localstorageservices.service';
import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  currentStock: any = [];
  currentName: string= '';
  constructor(private storageServices: LocalstorageservicesService, @Inject(MAT_DIALOG_DATA) private dialogData: any) { }

  ngOnInit(): void {
    this.currentName = this.dialogData.name;
    this.currentStock = this.storageServices.getFromLocalStorage('stock');
  }
  delete(){
      this.currentStock.forEach((element: any) => {
        if(element.name === this.currentName){
            let indexx = (this.currentStock as []).indexOf(element as never);
            (this.currentStock as []).splice(indexx,1)
        }
    });
    this.storageServices.setToLocalStorage('stock',this.currentStock)
  }
  cancel(){

  }



}
