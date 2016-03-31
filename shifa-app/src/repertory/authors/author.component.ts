import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router,RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';



import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'repertory-home',
  moduleId: module.id,
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class AuthorRepertoryComponent implements OnInit{
    search:string;
  authors = [
    {name:'Kent',src:'assets/images/authors/ic_mm_kent_logo.png', book:'kent'},
    {name:'Boenninghausen\'s',src:'assets/images/authors/ic_logo_boenninghausens.png', book:'Boenninghausens'},
    {name:'Cyrus Maxwell Boger',src:'assets/images/authors/ic_mm_allen_logo.png', book:'cyrus'}
  ];
  offset:number = 0;
  constructor(private _router: Router,private _routeParams:RouteParams){}
  onkeyup(event:any){
     if (event.which === 13) {
        this. getSearchByAllBook(event.target.value,this.offset);
    }
  }
  getSearchByAllBook(str:string, offset: number){
      this._router.navigate( ['RepertorySearchCategory', { search: str,offset:offset }] );
  }
  ngOnInit(){
      this.search= this._routeParams.get('search'); 
  }
 
}
