import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BodyComponent } from './components/body/body.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  { 
    path: '',
    component: BodyComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'stock', component: StockComponent },
      { path: '', redirectTo: '/gstock/accueil', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GStockRoutingModule { }
