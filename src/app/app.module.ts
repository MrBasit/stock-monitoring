import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStockComponent } from './popups/add-stock/add-stock.component';
import { EditStockComponent } from './popups/edit-stock/edit-stock.component';
import { ViewStockComponent } from './popups/view-stock/view-stock.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { TrackedStocksComponent } from './components/tracked-stocks/tracked-stocks.component';
import { DeleteComponent } from './popups/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddStockComponent,
    EditStockComponent,
    ViewStockComponent,
    StockListComponent,
    TrackedStocksComponent,
    DeleteComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
