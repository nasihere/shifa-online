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
  arrayOfKeys:Array<string>;
  category:string;
  search:string;
  offset:number = 0; 
  countItem:number;
  constructor(public repertoryService: RepertoryService,private _routeParams:RouteParams,private _router:Router) {
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
              this.repertoryList = (<any>res)[0].repertory;
             this.arrayOfKeys = Object.keys(this.repertoryList);
          },
          null,
          () => { this.isLoading = false; })
    }
    getSearchByBook(book:string, str:string, offset: number){
      Observable.forkJoin(
          this.repertoryService.getSearchByBook(book, str, offset)
      )
      .subscribe(
          res => {
              this.repertoryList = (<any>res)[0].repertory;
              this.countItem = this.Objectsize(this.repertoryList);
              this.arrayOfKeys = Object.keys(this.repertoryList);
          },
          null,
          () => { this.isLoading = false; })
    }
    Objectsize(obj:any) {
        var size = 0
        var key = '';
        for (key in obj) {
                size += Object.keys(obj[key]).length;
        }
        return size;
    };

    getSearchByAllBook( str:string, offset:number){
      Observable.forkJoin(
          this.repertoryService.getSearchByAllBook(str,offset)
      )
      .subscribe(
          res => {
              this.repertoryList = (<any>res)[0].repertory;
                 this.countItem = this.Objectsize(this.repertoryList);
            this.arrayOfKeys = Object.keys(this.repertoryList);
          },
          null,
          () => { this.isLoading = false; })
    }
    ngOnInit() {
        if (this.findType() == 1){
            this.category = this._routeParams.get('category');
            this.book = this._routeParams.get('book');
            this.book = (this.book === '') ? 'kent' : this.book;
            this.getCategory(this.book, this.category);    
        }
        else if (this.findType() == 2){
            this.search= this._routeParams.get('search');
            this.book = this._routeParams.get('book');
            this.book = (this.book === '') ? 'kent' : this.book;
            this.offset  = parseInt(this._routeParams.get('offset')); 
            this.getSearchByBook(this.book, this.search, this.offset );
        }
         else if (this.findType() == 3){
            this.search= this._routeParams.get('search');
            this.offset = parseInt(this._routeParams.get('offset')); 
            this.getSearchByAllBook(this.search,this.offset);
        }
         
    }
    findType(){
        let type = 1;
        if (this._routeParams.get('category') && this._routeParams.get('book')){
            type = 1
        }
        else if (this._routeParams.get('search') && this._routeParams.get('book')){
            type = 2
        } 
        
        else if (this._routeParams.get('search')){
            type = 3
        } 
        return type;
    }
}
