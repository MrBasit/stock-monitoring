import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss']
})
export class ViewStockComponent implements OnInit {

  currentValues: any;
  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: any) { }

  ngOnInit(): void {
    this.currentValues = this.dialogData;
  }

}
