import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class HttpService {
    baseURL = "http://universities.hipolabs.com/search?country=India";

    constructor(private http: HttpClient) { 
    }
   
    getAPI() {
        return this.http.get(this.baseURL)
      }

}