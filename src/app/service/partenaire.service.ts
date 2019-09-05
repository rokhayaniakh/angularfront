import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable()
export class PartenaireService {

    private _listpartUrl = "http://localhost:8000/listerp";
    private _listuserUrl = "http://localhost:8000/api/listerUser";
    private _listerdepotUrl = "http://localhost:8000/api/listerdepot";

    private headers={headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))}
    constructor(private http: HttpClient) { }

    listpart() {
        return this.http.get<any>(this._listpartUrl,this.headers)
    }

    listuser() {
        return this.http.get<any>(this._listuserUrl,this.headers)
    }
    listerdepot() {
        return this.http.get<any>(this._listerdepotUrl,this.headers)
    }
    
}