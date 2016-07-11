import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {MedicaService} from '../../shared/services/medica.service';
import {MMRemediesComponent} from './../remedies/remedies.component';
import {HTTP_PROVIDERS} from 'angular2/http';


import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {OnInit} from 'angular2/core';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'medica-search',
  moduleId: module.id,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES,MMRemediesComponent],
  providers:[MedicaService,HTTP_PROVIDERS]
})
export class SearchMedicaComponent implements OnInit{
  medicaData: Array<Object>;
  isLoading = false;
  searchTerm: string;
  paramLanguage: string;
  authors = [
    {name:'Kent',src:'assets/images/authors/ic_mm_kent_logo.png', book:'kent'},
    {name:'Boenninghausen\'s',src:'assets/images/authors/ic_logo_boenninghausens.png', book:'Boenninghausens'},
    {name:'Cyrus Maxwell Boger',src:'assets/images/authors/ic_mm_allen_logo.png', book:'cyrus'}
  ];
  constructor(public medicaService: MedicaService,private _routeParams:RouteParams,private _router:Router) {
      }

  getMedicaDetails(searchTerm: string) {
      alert(this.paramLanguage)
      Observable.forkJoin(
          this.medicaService.searchMM(searchTerm, this.paramLanguage)
      )
      .subscribe(
          res => {
              this.medicaData = (<any>res)[0].medica;
          },
          null,
          () => { this.isLoading = false; })
  }    
  ngOnInit() {
      this.paramLanguage = this._routeParams.get('language'); 
      this.searchTerm = this._routeParams.get('searchTerm');
      if (this.searchTerm) {
          this.getMedicaDetails(this.searchTerm);
      }  
        
  }
  // getRemediesDetails
  
  
}
