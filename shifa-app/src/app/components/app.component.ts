import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from '../../navbar/navbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';

import {RepertoryComponent} from '../../repertory/components/repertory.component';
import {ChapterComponent} from '../../repertory/chapters/chapter.component';

import {MedicaComponent} from '../../medica/components/medica.component';
import {MMRemediesComponent} from '../../medica/remedies/remedies.component';


import {HeaderRepertoryComponent} from '../../repertory/header/header.component';
import {HeaderMedicaComponent} from '../../medica/header/header.component';
import {AuthorRepertoryComponent} from '../../repertory/authors/author.component';
import {OrganonComponent} from '../../organon/components/organon.component';
import {ChatComponent} from '../../chat/components/chat.component';
import {ContactComponent} from '../../chat/contacts/contact.component';


import {NameListService} from '../../shared/services/name-list.service';
import {RepertoryService} from '../../shared/services/repertory.service';
import {MedicaService} from '../../shared/services/medica.service';
import {OrganonService} from '../../shared/services/organon.service';


@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, RepertoryService,MedicaService,OrganonService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  providers:[]
}) 
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/repertory', name: 'Repertory', component: AuthorRepertoryComponent },
  { path: '/kent-repertory', name: 'Kent-Repertory', component: ChapterComponent },
  { path: '/boenninghausen-repertory', name: 'Boenninghausen-Repertory', component: ChapterComponent },
  { path: '/cyrus-repertory', name: 'Cyrus-Repertory', component: ChapterComponent },
  
  { path:'/repertory/:book', name: 'RepertoryBook', component: ChapterComponent},
  { path:'/repertory/:book/:category', name: 'RepertoryCategory', component: RepertoryComponent},
  { path:'/repertory/search/:search/page/:offset', name: 'RepertorySearchCategory', component: RepertoryComponent},
  { path:'/repertory/search/:book/:search/page/:offset', name: 'RepertorySearchBookCategory', component: RepertoryComponent},
  
  
  { path: '/reversed-repertory', name: 'ReversedRepertory', component: RepertoryComponent },
  { path: '/medica-medica/:language/:rem', name: 'MedicaMateriaByRem', component: MedicaComponent },
  { path: '/medica-medica/:language/:searchTerm/page/:offset', name: 'MedicaMateriaSearch', component: MedicaComponent },
   
  { path: '/organon', name: 'Organon', component: OrganonComponent },
  { path: '/community', name: 'Community', component: ChatComponent },
  { path: '/chat', name: 'Chat', component: ChatComponent },
  { path: '/account', name: 'Account', component: RepertoryComponent },
  { path: '/settings', name: 'Settings', component: AboutComponent }
])
export class AppComponent {}
