import { Component, Input, Attribute } from '@angular/core';
import { LocalesStore } from '../translations-services';
import { Routes, Route, Router, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteData } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'keys-edit',
  inputs: ['router'],
  directives: [ROUTER_DIRECTIVES],
  viewProviders: [LocalesStore],
  template: `
    <form (submit)="submitForm($event)">
      <div class="row">
        <div class="col-xs-10 pull-right">
          <h3>
            {{ moduleId ? 'Edit' : 'Add' }} Key
          </h3>
        </div>
      </div>
      <div class="form-group row">
        <label for="name" class="col-sm-2 form-control-label">Name (camelCase)</label>
        <div class="col-sm-10">
          <input type="name" class="form-control" id="name" placeholder="Name" [(ngModel)]="key.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 form-control-label">Description</label>
        <div class="col-sm-10">
          <input type="description" class="form-control" id="description" placeholder="Description" [(ngModel)]="key.description">
        </div>
      </div>
      <div class="form-group row">
        <label for="defaultValue" class="col-sm-2 form-control-label">Default Value</label>
        <div class="col-sm-10">
          <input type="defaultValue" class="form-control" id="defaultValue" placeholder="Default Value" [(ngModel)]="key.defaultValue">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-success">Add Key</button>
        </div>
      </div>
    </form>
  `
})
export class KeysEditComponent {

  key = {};

  constructor(router: Router) {
    this.router = router;
  }

  routerOnActivate(curr) {
    let id = curr.getParam('keyname');
    if (!id) {
      return;
    }
    // do get service logic here
    this.key = {
      name: id,
      description: 'description',
      defaultValue: 'TEST'
    };
  }

  submitForm($event) {
    $event.preventDefault();
    console.log(this.module);
  }

}
