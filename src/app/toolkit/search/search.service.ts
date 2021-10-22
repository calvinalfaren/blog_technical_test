import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    constructor(private _httpClient: HttpClient) {
    }

    getData(api: string, query: string, token?: string): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }

        api = api.replace(':q', query ? query : '');
        
        return this._httpClient.get(api + "?" + query,  {headers: headers})
                 .map((response) => response);
    }
}
