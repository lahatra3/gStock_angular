import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockModel } from 'src/app/core/models/gstock.model';
import { GStockService } from 'src/app/core/services/gstock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock$!: Observable<StockModel[]>;

  constructor(
    private gstockService: GStockService
  ) { }

  ngOnInit(): void {
    this.stock$ = this.gstockService.findAllStock();
  }
}
