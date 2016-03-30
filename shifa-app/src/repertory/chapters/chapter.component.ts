import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RepertoryService} from '../../shared/services/repertory.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'sd-chapter',
  moduleId: module.id, 
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES],
  providers:[RepertoryService,HTTP_PROVIDERS]
})
export class ChapterComponent implements OnInit  {
  
  repertoryList: Object;
  isLoading = false;
  book: string;
  constructor(public repertoryService: RepertoryService,private _routeParams:RouteParams,private _router:Router) {
     
  }
    getChapter(book:string){
         
      Observable.forkJoin(
          this.repertoryService.getChapter(book)
          
      )
      .subscribe(
          res => {
              this.repertoryList = (<any>res)[0].chapters;
          },
          null,
          () => { this.isLoading = false; })
          
    }
    ngOnInit() {
        this.book = this._routeParams.get('book');
        this.book = (this.book === '') ? 'kent' : this.book;
        this.getChapter(this.book); 
    }
    
}
