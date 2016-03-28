import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RepertoryService} from '../../shared/services/repertory.service';


import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'repertory-header',
  moduleId: module.id,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[HTTP_PROVIDERS,RepertoryService]
})
export class HeaderRepertoryComponent {

  isLoading = true;
  repertoryList: Object;
  constructor(public repertoryService: RepertoryService) {
      this.repertoryList = repertoryService.get();
  }
  getChapter(category: string){
       Observable.forkJoin(
          this.repertoryService.getMainCategory(category)
      )
      .subscribe(
          res => {
              this.repertoryList = res[0];
          },
          null,
          () => { this.isLoading = false; })
  }
  
}
