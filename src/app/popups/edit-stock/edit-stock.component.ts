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
 currentName = this.dialogData.name;
 currentStock: any =[];
 constructor(private storageServices: LocalstorageservicesService, @Inject(MAT_DIALOG_DATA) private dialogData: any) { }

  ngOnInit(): void {
    console.log(this.dialogData)
    this.createForm();
    this.currentStock = this.storageServices.getFromLocalStorage('stock');
  }

  // create form 

  createForm(): FormGroup{
    console.log(this.dialogData.expire)
    console.log(this.dialogData.expires)
    console.log(this.dialogData)
    return this.form = new FormGroup({
      minPrice: new FormControl(this.dialogData.minPrice),
      maxPrice: new FormControl(this.dialogData.maxPrice),
      expire: new FormControl(this.dialogData.expire),
      date: new FormControl(this.dialogData.date),
    })
  }

  update(){
    let formValues = this.form.value;
    formValues.name =  this.currentName;
        this.currentStock.forEach((element: any) => {
          if(element.name === this.currentName){
            let indexx = (this.currentStock as []).indexOf(element as never);
            (this.currentStock as Array<any>).splice(indexx,1,formValues)
          }
      });
      this.storageServices.setToLocalStorage('stock',this.currentStock)
   }

}
