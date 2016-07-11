import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {MedicaService} from '../../shared/services/medica.service';
import {MMRemediesComponent} from './../remedies/remedies.component';
import {SearchMedicaComponent} from './../search/search.component';
import {HeaderMedicaComponent} from './../header/header.component';
import {HTTP_PROVIDERS} from 'angular2/http';


import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {OnInit} from 'angular2/core';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'sd-medica',
  moduleId: module.id,
  templateUrl: './medica.component.html',
  styleUrls: ['./medica.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES,HeaderMedicaComponent,MMRemediesComponent,SearchMedicaComponent],
  providers:[MedicaService,HTTP_PROVIDERS]
})
export class MedicaComponent implements OnInit{
  medicaData: Array<Object>;
  isLoading = false;
  detailsMode = true;
  searchTerm: string;
  constructor(public medicaService: MedicaService,private _routeParams:RouteParams,private _router:Router) {
      }

 getMedicaSearch(searchTerm: string) {
      Observable.forkJoin(
          this.medicaService.searchMM(searchTerm)
      )
      .subscribe(
          res => {
              this.medicaData = (<any>res)[0].medica;
          },
          null,
          () => { this.isLoading = false; })
  }    

  getMedicaDetails(rem: string) {
      Observable.forkJoin(
          this.medicaService.getRemediesDetails(rem)
      )
      .subscribe(
          res => {
              this.medicaData = (<any>res)[0];
          },
          null,
          () => { this.isLoading = false; })
  }    
  ngOnInit() {
    if (this._routeParams.get('rem')) {
        this.getMedicaDetails(this._routeParams.get('rem'));
    }
    else if (this._routeParams.get('searchTerm')) {
     this.searchTerm = this._routeParams.get('searchTerm');
      if (this.searchTerm) {
          this.getMedicaSearch(this.searchTerm);
      }  
    }
    else {
        
    }
  }
  // getRemediesDetails
  
  
}
