import { Component, Input, Attribute } from '@angular/core';
import { Routes, Route, Router, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData } from '@angular/router';
import { LocalesStore } from '../translations-services';
import { Observable } from 'rxjs/Observable';
import { KeysListComponent } from './keys-list-component';
import { KeysEditComponent } from './keys-edit-component';

@Component({
  selector: 'keys',
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
  { path: '/', component: KeysListComponent, as: 'KeysList' },
  { path: '/add', component: KeysEditComponent, as: 'KeysAdd' },
  { path: '/:keyname/edit', component: KeysEditComponent, as: 'KeysEdit' },
])
export class KeysComponent {

}
