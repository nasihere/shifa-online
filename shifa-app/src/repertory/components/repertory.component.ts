import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RepertoryService} from '../../shared/services/repertory.service';
import {HeaderRepertoryComponent} from '../../repertory/header/header.component';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/forkJoin';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-repertory',
  moduleId: module.id,
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES,ROUTER_DIRECTIVES,HeaderRepertoryComponent],
  providers:[RepertoryService,HTTP_PROVIDERS]
})
export class RepertoryComponent {
  repertoryList: Object;
  isLoading = true;
  constructor(public repertoryService: RepertoryService) {
      Observable.forkJoin(
          this.repertoryService.getMainCategory('Ear')
          
      )
      .subscribe(
          res => {
              this.repertoryList = res[0];
          },
          null,
          () => { this.isLoading = false; })
  }
  
  getCategory(category: string){
       Observable.forkJoin(
          this.repertoryService.getCategory(category)
      )
      .subscribe(
          res => {
              this.repertoryList = res[0];
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
  
}
