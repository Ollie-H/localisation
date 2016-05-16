import { Component, Input, Attribute } from '@angular/core';
import { LocalesStore } from '../translations-services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'languages',
  viewProviders: [LocalesStore],
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        Panel heading
      </div>
      <table class="table">
        <thead>
          <tr> 
            <th>ISO Code</th>
            <th>Name (English)</th>
            <th>Name (Native)</th>
            <th>Primary Dialect</th>
          </thead>
        <tbody>
          <tr *ngFor="let language of languages" (click)="selectLanguage($event, language)">
            <th>{{language.iso_code}}</th>
            <td>{{language.english_name}}</td>
            <td>{{language.native_name}}</td>
            <td>{{language.primary_language}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class LanguagesComponent {

  languages = [];

  constructor(localesStore: LocalesStore) {
    this.localesStore = localesStore;
  }

  ngOnInit() {
    this.languages = this.localesStore.getLanguages();
  }
}
