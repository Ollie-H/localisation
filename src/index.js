import 'babel-polyfill';
import 'zone.js/dist/zone';

import {provide} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';

import {App} from './app';

bootstrap(App, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, { useClass: PathLocationStrategy }),
]).catch(err => console.error(err));
