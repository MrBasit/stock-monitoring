import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockpricevariation';
  constructor(private dataService:DataService){}
  ngOnInit():void{
    this.dataService.getAllStockRecords(['AAPL','TSLA','MSFT']).subscribe(r=>{console.log(r)});
  }
}

