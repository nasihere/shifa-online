import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {OrganonService} from '../../shared/services/organon.service';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {OnInit} from 'angular2/core';


@Component({
  selector: 'sd-organon',
  moduleId: module.id,
  templateUrl: './organon.component.html',
  styleUrls: ['./organon.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES],
  providers:[OrganonService]
})
export class OrganonComponent implements OnInit{
  organonData: Object;
  organonIndex: string[];
  indexNo:string;
  constructor(public organonService: OrganonService,private _routeParams:RouteParams,private _router:Router) {
       this.organonData = organonService.get();
  }
  ngOnInit() {
        this.indexNo = this._routeParams.get('indexNo') || '1-19';
       
    }
  
  
}
