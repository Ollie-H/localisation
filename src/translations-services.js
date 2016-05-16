import { Injectable }     from '@angular/core';
import { ApiService }     from './common/services/api-service';
import { LOCALES }     from './common/config/locales';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';

export class LocalesStore extends ApiService  {

    languageIsPrimary(key) {
      const languagePrimary = LOCALES['primary-dialects'];
      let languageParts = key.split('-');

      if (languageParts.length === 1) {
        return false;
      }
      return languagePrimary[languageParts[0]] === key;
    }

    getLanguages() {
      const languageName = LOCALES['language-names'];

      return Object.keys(LOCALES['language-names']).map((key) => ({
        iso_code: key,
        native_name: languageName[key][0],
        english_name: languageName[key][1],
        primary_language: this.languageIsPrimary(key)
      }));
    }

    saveKey() {
      return super.httpGet(this.url.replace('#', aQuery))
        .map(res => res.results);
    }

}