import { Component, Input, Attribute } from '@angular/core';
import { LocalesStore } from '../translations-services';
import { ApiService } from '../common/services/api-service';
import { Routes, Route, Router, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'modules-edit',
  inputs: ['router'],
  directives: [ROUTER_DIRECTIVES],
  viewProviders: [LocalesStore, ApiService],
  template: `
    <form (submit)="submitForm($event)">
      <div class="row">
        <div class="col-xs-10 pull-right">
          <h3>
            {{ moduleId ? 'Edit' : 'Add' }} Module
          </h3>
        </div>
      </div>
      <div class="form-group row">
        <label for="name" class="col-sm-2 form-control-label">Name (camelCase)</label>
        <div class="col-sm-10">
          <input type="name" class="form-control" id="name" placeholder="Name" [(ngModel)]="module.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 form-control-label">Description</label>
        <div class="col-sm-10">
          <input type="description" class="form-control" id="description" placeholder="Description" [(ngModel)]="module.description">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">{{ moduleId ? 'Edit' : 'Add' }} Module</button>
        </div>
      </div>
    </form>
  `
})
export class ModulesEditComponent {

  moduleId;
  module = {};
  baseUrl = '/api/modules';

  constructor(router: Router, apiService: ApiService) {
    this.router = router;
    this.apiService = apiService;
  }

  routerOnActivate(curr) {
    this.moduleId = curr.getParam('name');
    if (!this.moduleId) {
      return false;
    }
    // do get service logic her
    this.module = {
      name: this.moduleId,
      description: 'description',
    }
  }

  submitForm($event) {
    this.apiService.Post(this.baseUrl, this.module)
      .subscribe((res) => console.log(res));
  }

}
