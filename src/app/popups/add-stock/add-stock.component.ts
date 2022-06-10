
import { NgAnalyzedFile } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocalstorageservicesService } from 'src/app/services/localstorageservices.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
 color: ThemePalette = 'primary'
 form!: FormGroup;
 formArray: any = [];
 currentStock: any =[];
 data:any;
checked = false;
  constructor(@Inject(MAT_DIALOG_DATA) private dialogData : any, private storageServices: LocalstorageservicesService) {
    this.currentStock = this.storageServices.getFromLocalStorage('stock')
    console.log(this.currentStock)
  }

  ngOnInit(): void {
    this.createForm();
    this.data = this.dialogData;
    console.log(this.dialogData)
    
  }

  
  // create form 
  createForm(): FormGroup{
    return this.form = new FormGroup({
      minPrice: new FormControl(),
      maxPrice: new FormControl(),
      expire: new FormControl(),
      date: new FormControl(),
    })
  }


  getAndSetFormData(formValues: any){
    if(this.currentStock !== null){
     this.formArray = this.currentStock;
    }
    let obj = formValues;
    obj.name = this.dialogData.name;
    obj.symbol = this.dialogData.symbol ;

    this.formArray.push(obj)
    this.storageServices.setToLocalStorage('stock',this.formArray)
    this.reset();
    console.log(this.formArray)
    
  }

  reset(){
    this.form.controls['minPrice'].setValue('');
    this.form.controls['maxPrice'].setValue('');
    this.form.controls['expire'].setValue(false);
    this.form.controls['date'].setValue('');
  }

  

}
