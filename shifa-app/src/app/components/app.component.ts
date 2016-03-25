import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';
import {RepertoryComponent} from '../../repertory/components/repertory.component';
import {NameListService} from '../../shared/services/name-list.service';
import {DashboardService} from '../../shared/services/dashboard.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService,DashboardService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/repertory', name: 'Repertory', component: RepertoryComponent },
  { path: '/medica', name: 'Medica', component: RepertoryComponent },
  { path: '/abbreviation', name: 'Abbreviation', component: RepertoryComponent },
  { path: '/community', name: 'Community', component: RepertoryComponent },
  { path: '/account', name: 'Account', component: RepertoryComponent },
  { path: '/settings', name: 'Settings', component: AboutComponent }
])
export class AppComponent {}
