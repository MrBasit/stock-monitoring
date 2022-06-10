import { SharedService } from './../../shared.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ThemePalette } from '@angular/material/core';
import { Component, Inject, OnInit } from '@angular/core';
import { LocalstorageservicesService } from 'src/app/services/localstorageservices.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {

 color : ThemePalette = 'primary'
 form!: FormGroup;
 currentName: string = '';
 currentStock: any =[];
 formArray:Array<any> = []
 constructor(private storageServices: LocalstorageservicesService, @Inject(MAT_DIALOG_DATA) private dialogData: any,private service: SharedService) { }

  ngOnInit(): void {
    this.createForm();
    this.currentStock = this.storageServices.getFromLocalStorage('stock');
    this.currentName = this.dialogData.name;
  }

  // create form 

  createForm(): FormGroup{
    return this.form = new FormGroup({
      minPrice: new FormControl(this.dialogData.minPrice),
      maxPrice: new FormControl(this.dialogData.maxPrice),
      expire: new FormControl(this.dialogData.expire),
      date: new FormControl(this.dialogData.date),
    })
  }

  update(){
    let obj = this.form.value;
    obj.name =  this.currentName;
    obj.symbol = this.dialogData.symbol;
        this.currentStock.forEach((element: any) => {
          if(element.name === this.currentName){
            let indexx = (this.currentStock as []).indexOf(element as never);
            (this.currentStock as Array<any>).splice(indexx,1,obj)
          }
      });
      this.storageServices.setToLocalStorage('stock',this.currentStock);
      this.service.emitRecordChange('edit');
      alert('item updated in tracked stocks list');
   }

}
