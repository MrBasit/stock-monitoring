import { Component } from '@angular/core';
import { Observable, observable, interval } from 'rxjs';
import { DataService } from './data.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockpricevariation';
  constructor(private dataService:DataService, private sharedService:SharedService){}
  ngOnInit():void{
    
  }
}

