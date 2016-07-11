import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import 'rxjs/add/observable/forkJoin';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';


import {Observable} from 'rxjs/Observable';
import {MedicaService} from '../../shared/services/medica.service';

@Component({
  selector: 'header-medica',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES],
  providers:[MedicaService,HTTP_PROVIDERS]
})
export class HeaderMedicaComponent implements OnInit{
  medicaData: Object;
  paramLanguage: string;
  isLoading = false;
  search: string;
  paramSearchRem: string;
  paramSearchTerm: string;
  listLanguage = ['English','German','Dutch','French','Portugal','Spanish','Italian'];
  constructor(public medicaService: MedicaService,private _routeParams:RouteParams,private _router:Router) {
      //this.medicaData = medicaService.get();
  }

    getSearchByText(str:string){
        this._router.navigate( ['MedicaMateriaSearch', {language:this.paramLanguage, searchTerm: str, offset: 0 }] );
    }

  enterKeySearch(searchTerm: string){
        this.getSearchByText(searchTerm);
    }

    
  ngOnInit() {
      this.paramLanguage = this._routeParams.get('language') || 'English';
      this.paramSearchRem = this._routeParams.get('rem') || null;
      this.paramSearchTerm = this._routeParams.get('searchTerm') || null;
     Observable.forkJoin(
          this.medicaService.getRemediesList()
      )
      .subscribe(
          res => {
              this.medicaData = (<any>res)[0];

          },
          null,
          () => { this.isLoading = false; }) 
  }
  
  
}
