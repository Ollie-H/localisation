import { Component, Input, Attribute, ElementRef } from '@angular/core';
import { Routes, Route, Router, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData, CanDeactivate } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { LocalesStore } from './translations-services';
import { LanguagesComponent } from './languages/languages-component';
import { ModulesComponent } from './modules/modules-component';
import { KeysComponent } from './keys/keys-component';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  viewProviders: [LocalesStore],
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h1>Localisation</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <ul class="nav nav-tabs">
          <li role="presentation" [class.active]="getLinkStyle()"><a [routerLink]="['./']">Localisations</a></li>
          <li role="presentation" [class.active]="getLinkStyle('modules')"><a [routerLink]="['/modules']">Modules</a></li>
          <li role="presentation" [class.active]="getLinkStyle('languages')"><a [routerLink]="['/languages']">Languages</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h3>&nbsp;</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
@Routes([
  { path: '/', component: LanguagesComponent, useAsDefault: true, as: 'Languages' },
  { path: '/languages', component: LanguagesComponent, as: 'Languages' },
  { path: '/modules', component: ModulesComponent, as: 'Modules' },
  { path: '/keys', component: KeysComponent, useAsDefault: true, as: 'Keys' },
])
export class App {

  constructor(location: Location) {
    this.location = location;
  }

  getLinkStyle(path) {
    let currPath = this.location.path();
    return typeof path === 'undefined' && !currPath ? true : currPath.includes(path);
  }

}
