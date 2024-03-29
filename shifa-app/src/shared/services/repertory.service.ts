import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class RepertoryService  {
  private _base = 'http://localhost:3000/api/TblShifas'
  constructor(private _http: Http){
      
  }
  repertory = {
		  repertoryChapterData: ['Head','Nose','Face','Mouth','Rectum','Stool','Extremities','Sleep','Generalities','Mind','Vertigo','Eye','Vision','Ear','Hearing','Throat','Stomach','Abdomen','Bladder','Kidneys','Urethra','Urine','Male','Female','Genitalia female','Trachea','Larynx and trachea','Respiration','Cough','Expectoration'],
		  repertoryData : [{id:1}] 
	}   
  get(): Observable<Object> {
    return this._http.get(this._base+'?filter[where][Id]=4')
			.map(res => res.json());
  }
  
  
  getMainCategory(mainCategory: string): Observable<Object> {
    return this._http.get(this._base+'?filter[where][maincategoy]='+mainCategory)
			.map(res => res.json());
  }
  
  getCategory(book: string, category: string): Observable<Object> {
    return this._http.get(this._base+'/category?category='+category+'&book='+book + "&offset=0")
			.map(res => res.json());
  }
  
  getSearchByBook(book: string, str: string, offset:number): Observable<Object> {
    return this._http.get(this._base+'/searchByBook?search='+str+'&book='+book + "&offset="+offset)
			.map(res => res.json());
  }
  getSearchByAllBook(str: string, offset:number): Observable<Object> {
    return this._http.get(this._base+'/searchByAllBook?search='+str + "&offset="+offset)
			.map(res => res.json());
  }
  getChapter(book:string):Observable<Object>{
    return this._http.get(this._base+'/chapter?book='+book)
			.map(res => res.json());
  }
  //get(): Array<Object>{
  //    return this.repertoryData;
 // }
}
 