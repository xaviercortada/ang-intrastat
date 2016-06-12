import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {SeedApp} from './app/seed-app';
import {ProveedorService} from "./app/services/ProveedorService";
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Configuration} from "./app/app.constants";
import {PartidaService} from "./app/services/PartidaService";
import {ResourceService} from "./app/services/ResourceService";


// enableProdMode()



bootstrap(SeedApp, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS,Configuration,ProveedorService,PartidaService,ResourceService])
.catch(err => console.error(err));
