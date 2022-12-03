import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GStockRoutingModule } from './g-stock-routing.module';
import { BodyComponent } from './components/body/body.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [
    BodyComponent,
    AccueilComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    GStockRoutingModule
  ], 
  exports: [
    BodyComponent,
    AccueilComponent,
    StockComponent
  ]
})
export class GStockModule { }
