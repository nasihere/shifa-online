import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';



@Injectable()

export class HTTP_API {

	private _base = 'http://jsonplaceholder.typicode.com/'
	
	constructor(private _http: Http) {
		
	}
	get(url:string){
		return this._http.get(this._base+'posts')
			.map(res => res.json());
	}

	// post(url,data){
	// 	return this._http.post(this._base  + 'posts', JSON.stringify(data))
	// 		.map(res => res.json());

	// }
}