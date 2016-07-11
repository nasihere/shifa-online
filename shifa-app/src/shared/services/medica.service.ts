import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class MedicaService {
     private _base = 'http://localhost:3000/api/TblRemInfos'
  constructor(private _http: Http){
      
  }

    getRemediesList(): Observable<Object> {
        return this._http.get(this._base+'?filter[fields][rem]=true&filter[where][status]=1').map(res => res.json());
    }

    getRemediesDetails(rem: string): Observable<Object> {
      return this._http.get(this._base+'?filter[where][rem]='+rem).map(res => res.json());
    }
    
    searchMM(searchTerm: string, language: string): Observable<Object> {
      return this._http.get(this._base+'/searchDetails?language='+language+'&searchTerm='+searchTerm + '&offset=0').map(res => res.json());
    }
    
}
