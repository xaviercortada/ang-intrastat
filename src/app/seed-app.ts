import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {Navbar} from "./components/navbar/navbar";
import {ProveedorList} from "./components/proveedor-list/proveedor-list";
import {ProveedorDetail} from "./components/proveedor-detail/proveedor-detail";
import {Contact} from "./components/contact/contact";
import {Home} from "./components/home/home";
import {ProveedorService} from "./services/ProveedorService";
import {Login} from "./components/login/login";
import {PartidaList} from "./components/partida-list/partida-list";
import {PartidaDetail} from "./components/partida-detail/partida-detail";
import {Logout} from "./components/logout/logout";


@Component({
  selector: 'my-app',
  template: `
    
    <navbar></navbar>
  
    <div style="margin-top: 50px">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ Navbar, ROUTER_DIRECTIVES ],
  providers: [
    ProveedorService
  ]

})
@RouteConfig([
  { path: '.',  name: 'Home',  component: Home, useAsDefault: true },
  { path: 'proveedores', name: 'Proveedores', component: ProveedorList },
  { path: 'partidas', name: 'Partidas', component: PartidaList },
  { path: 'proveedor/:id', name: 'ProveedorDetail', component: ProveedorDetail },
  { path: 'partida/:id', name: 'PartidaDetail', component: PartidaDetail },
  { path: 'login',     name: 'Login',     component: Login },
  { path: 'logout',     name: 'Logout',     component: Logout },
  { path: 'contact',     name: 'Contact',     component: Contact }
])
export class SeedApp {
  public title = 'INTRASTAT';
}

