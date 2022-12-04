import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { StockModel } from "../models/gstock.model";

@Injectable({
    providedIn: 'root'
})
export class GStockService {
    constructor(
        private http: HttpClient
    ) {}

    findAllStock(): Observable<StockModel[]> {
        return this.http.get<StockModel[]>(environment.baseUrl + '/stockages/all');
    }
}
