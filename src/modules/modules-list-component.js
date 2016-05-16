import { Component, Input, Attribute } from '@angular/core';
import { LocalesStore } from '../translations-services';
import { Routes, Route, Router, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'modules-list',
  inputs: ['router'],
  viewProviders: [LocalesStore],
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        Modules
        <button type="button" class="btn btn-success btn-xs pull-right" (click)="addModule()">
          Add New Module
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let module of modules" (click)="selectModule($event, module)" class="module-list__row">
            <td>{{ module.name }}</td>
            <td>{{ module.description }}</td>
            <td>  
              <button type="button" class="btn btn-success btn-xs pull-right" (click)="addKeys(module)">
                Manage Keys
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
              <span class="pull-right">
                &nbsp;&nbsp;&nbsp;
              </span>
              <button type="button" class="btn btn-xs pull-right" (click)="editModule(module)">
                Edit
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
              </button>
              <span class="pull-right">
                &nbsp;&nbsp;&nbsp;
              </span>
              <button type="button" class="btn btn-danger btn-xs pull-right" (click)="removeModule(module)">
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
export class ModulesListComponent {

  modules = [{
    name: 'test',
    description: 'description',
  }];

  constructor(router: Router) {
    this.router = router;
  }
  addModule() {
    this.router.navigate(['modules/', 'add']);
  }
  editModule(module) {
    this.router.navigate(['modules/', module.name + '/', 'edit']);
  }
  addKeys(module) {
    this.router.navigate(['keys/', {moduleid: module.name}]);
  }

}
