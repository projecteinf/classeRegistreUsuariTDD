import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const apiURL="https://cataas.com/api/";

@Injectable({
    providedIn: 'root'
})


export class Api {

    constructor(private http:HttpClient) {};
    getCats(items:number):Observable<Object> {
        let endPoint:string="cats?limit="+items.toString();
        return this.http.get(apiURL+endPoint)
    }
    
}