import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Observable} from 'rxjs/Observable';
import {MedicaService} from '../../shared/services/medica.service';
import {OnInit} from 'angular2/core';
import 'rxjs/add/observable/forkJoin';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
// import {CustomerEmailFilter} from './remedies.filter';

@Component({
  selector: 'materia-remedies',
  moduleId: module.id,
  templateUrl: './remedies.component.html',
  //  pipes: [CustomerEmailFilter],
  styleUrls: ['./remedies.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES],
  providers:[MedicaService,HTTP_PROVIDERS]
})
export class MMRemediesComponent implements OnInit{
  remediesList:Array<Object>;
  isLoading = false;
  paramLanguage: string;
  searchParam: string;
  constructor(public medicaService: MedicaService,private _routeParams:RouteParams,private _router:Router) {

  }
  ngOnInit() {
    this.searchParam = this._routeParams.get('rem');
    this.paramLanguage = this._routeParams.get('language') || 'English';
   Observable.forkJoin(
          this.medicaService.getRemediesList()
      )
      .subscribe(
          res => {
              this.remediesList = (<any>res)[0];

          },
          null,
          () => { this.isLoading = false; }) 
  }
}
