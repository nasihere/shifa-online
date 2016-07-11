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
  isLoading = false;
  search: string;
  constructor(public medicaService: MedicaService,private _routeParams:RouteParams,private _router:Router) {
      //this.medicaData = medicaService.get();
  }

  enterKeySearch(searchTerm: string){
        this.getSearchByText(searchTerm,0);
    }

    getSearchByText(str:string, offset:number){
        
        this._router.navigate( ['MedicaMateriaSearch', { searchTerm: str, offset: offset }] );
    }
    
  ngOnInit() {
      
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
