import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Service to notify local storage values
 */

 @Injectable({
    providedIn: 'root'
  })
  @Injectable()

export class CommonService{
    // serverUrl='assets/data.json';
    serverUrl="http://127.0.0.1:8000/core/employee/";
    
    constructor(private http :HttpClient){}
    
    getData(): Observable<any>{
        return this.http.get(this.serverUrl);
    }

    postData(body): Observable<any>{
        return this.http.post(this.serverUrl,body);
    }

    deleteData(id): Observable<any>{
        return this.http.delete(this.serverUrl+id)
    }

}
