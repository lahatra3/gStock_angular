import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthModel } from "../models/auth.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    setToken(token: string): void {
        localStorage.setItem('gstock', token);
    }

    getToken(): string | null {
        return localStorage.getItem('gstock');
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('gstock') !== null;
    }

    logIn(donnees: AuthModel): Observable<any> {
        return this.http.post(environment.baseUrl + '/auth', 
            donnees, {observe: 'response'});
    }

    logOut(): void {
        localStorage.removeItem('gstock');
        this.router.navigateByUrl('/auth');
    }
}
