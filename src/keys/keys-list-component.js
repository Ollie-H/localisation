import { Component, Input, Attribute } from '@angular/core';
import { Location } from '@angular/common';
import { LocalesStore } from '../translations-services';
import { Routes, Route, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'keys-list',
  viewProviders: [LocalesStore],
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        Modules
        <button type="button" class="btn btn-success btn-xs pull-right" (click)="addKey()">
          Add New Key
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Default (English)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let key of keys" class="module-list__row">
            <td>{{ key.name }}</td>
            <td>{{ key.description }}</td>
            <td>{{ key.defaultValue }}</td>
            <td> 
              <span class="pull-right">
                &nbsp;&nbsp;&nbsp;
              </span>
              <button type="button" class="btn btn-xs pull-right" (click)="editKey(key)">
                Edit
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <span class="pull-right">
                &nbsp;&nbsp;&nbsp;
              </span>
              <button type="button" class="btn btn-danger btn-xs pull-right" (click)="removeKey(key)">
                Remove
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class KeysListComponent {

  moduleId;
  keys = [{
    name: 'buttonLinkOne',
    description: 'Button Link',
    defaultValue: 'lorem ipsum!!'
  }];

  constructor(router: Router, location: Location) {
    this.router = router;
    this.moduleId = location.path().split('=')[1];
  }

  editKey(key) {
    this.router.navigate(['keys/', key.name + '/', 'edit', { moduleid: this.moduleId }]);
  }

  addKey() {
    this.router.navigate(['keys/', 'add', { moduleid: this.moduleId }]);
  }

  removeKey() {

  }

}
