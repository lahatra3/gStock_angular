import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { GStockInterceptor } from "./gstock.intercepor";

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: GStockInterceptor,
        multi: true
    }
];