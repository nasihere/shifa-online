import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RepertoryService} from '../../shared/services/repertory.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

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
export class ChapterComponent {
  repertoryList: Object;
  isLoading = false;
  constructor(public repertoryService: RepertoryService) {
      
      Observable.forkJoin(
          this.repertoryService.getChapter()
          
      )
      .subscribe(
          res => {
              this.repertoryList = (<any>res)[0].chapters;
              console.log(this.repertoryList)
          },
          null,
          () => { this.isLoading = false; })
          
  }

  
}
