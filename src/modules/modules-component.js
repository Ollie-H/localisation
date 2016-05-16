import { Component, Input, Attribute } from '@angular/core';
import { Routes, Route, Router, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData } from '@angular/router';
import { LocalesStore } from '../translations-services';
import { Observable } from 'rxjs/Observable';
import { ModulesListComponent } from './modules-list-component';
import { ModulesEditComponent } from './modules-edit-component';

@Component({
  selector: 'modules',
  directives: [ROUTER_DIRECTIVES],
  viewProviders: [LocalesStore],
  template: `
    <div class="row">
      <div class="col-xs-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
@Routes([
  { path: '/', component: ModulesListComponent, useAsDefault: true, as: 'ModuleList' },
  { path: '/add', component: ModulesEditComponent, useAsDefault: true, as: 'ModuleAdd' },
  { path: '/:name/edit', component: ModulesEditComponent, useAsDefault: true, as: 'ModuleEdit' }
])
export class ModulesComponent {

}
