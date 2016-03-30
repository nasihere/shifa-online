import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RepertoryService} from '../../shared/services/repertory.service';
import {HeaderRepertoryComponent} from '../../repertory/header/header.component';
import {HTTP_PROVIDERS} from 'angular2/http';

import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {OnInit} from 'angular2/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'sd-repertory',
  moduleId: module.id,
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES,HeaderRepertoryComponent],
  providers:[RepertoryService,HTTP_PROVIDERS]
})
export class RepertoryComponent implements OnInit{
  repertoryList: Object;
  isLoading = true;
  book:string;
  category:string;
  constructor(public repertoryService: RepertoryService,private _routeParams:RouteParams,private _router:Router) {
      Observable.forkJoin(
          this.repertoryService.getMainCategory('Ear')
          
      )
      .subscribe(
          res => {
              this.repertoryList = (<any>res)[0];
          },
          null,
          () => { this.isLoading = false; })
  }
 
  remediesColor(str: string): string {
          var remedyCount = parseInt(str.split(",")[1]);
          if (remedyCount == 1)
          {
              return 'text-info'
          }
          else if (remedyCount == 2)
          {
              return 'text-success';
          }
          else {
              
              return 'text-danger';
          }
  }
  getCategory(book:string, category: string){
         
      Observable.forkJoin(
          this.repertoryService.getCategory(book, category)
      )
      .subscribe(
          res => {
              this.repertoryList = (<any>res)[0];
          },
          null,
          () => { this.isLoading = false; })
    }
    ngOnInit() {
        this.category = this._routeParams.get('category');
        this.book = this._routeParams.get('book');
        this.book = (this.book === '') ? 'kent' : this.book;
        this.getCategory(this.book, this.category); 
    }
}
