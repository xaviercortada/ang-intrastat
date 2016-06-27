import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {SeedApp} from './app/seed-app';
import {HTTP_PROVIDERS} from '@angular/http';
import {Configuration} from "./app/app.constants";
import {LoginService} from "./app/services/LoginService";


// enableProdMode()



bootstrap(SeedApp, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS,Configuration,LoginService])
.catch(err => console.error(err));
