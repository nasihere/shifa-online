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
