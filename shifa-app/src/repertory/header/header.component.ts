import {Component} from 'angular2/core';
import {RepertoryService} from '../../shared/services/repertory.service';


import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {ROUTER_DIRECTIVES,RouteParams,Router} from 'angular2/router';

@Component({
  selector: 'repertory-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[HTTP_PROVIDERS,RepertoryService]
})
export class HeaderRepertoryComponent {

  repertoryList: Object;
  isLoading = false;
  book: string;
  search:string;
  offset:number = 0;
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
   enterKeySearch(event:any){
        if (this._routeParams.get('book') === null){
            this. getSearchByAllBook(event.target.value,0);
        }
        else {
            this. getSearchByBook(this.book, event.target.value,0);
        }
    
    }
    getSearchByBook(book:string, str:string, offset:number){
        this._router.navigate( ['RepertorySearchBookCategory', {book:this.book, search: str, offset: offset }] );
    }
    getSearchByAllBook(str:string, offset:number){
        
        this._router.navigate( ['RepertorySearchCategory', { search: str, offset: offset }] );
    }
    ngOnInit() {
        this.offset= parseInt(this._routeParams.get('offset'));
        this.search= this._routeParams.get('search'); 
        this.book = this._routeParams.get('book');
        this.book = (this.book === null) ? 'kent' : this.book;
        this.getChapter(this.book); 
    }
    
   
}
