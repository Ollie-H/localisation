import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {

  storage;

  constructor() {
    this.storage = localStorage;
  }

  getItem(aKey): any {
    var item = this.storage.getItem(aKey);
    if(item && item !== 'undefined') {
      return JSON.parse(this.storage.getItem(aKey));
    }
    return;
  }

  setItem(aKey, aValue) {
    this.storage.setItem(aKey, JSON.stringify(aValue));
  }

}