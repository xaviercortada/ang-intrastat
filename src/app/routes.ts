/**
 * Created by xavier on 21/05/16.
 */

import { Type } from '@angular/core';
import { Home } from './components/home/home';
import {About} from "./components/about/about";
import {Contact} from "./components/contact/contact";
import {ProveedorList} from "./components/proveedor-list/proveedor-list";
import {PartidaList} from "./components/partida-list/partida-list";

export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

interface RouteInfoMetadata {
  path: string;
  component: Type;
  title: string;
  menuType: MenuType;
}

/**
 *  RouteInfo
 */
export declare class RouteInfo implements RouteInfoMetadata {
  path: string;
  component: Type;
  title: string;
  menuType: MenuType;
  constructor({path, component, title}?: {
    path?: string;
    component?: Type;
    title?: string;
    menuType?: MenuType;
  });
}

export const ROUTES: RouteInfo[] = [
  { path: '/', component: Home, title: "Home", menuType: MenuType.BRAND },
  { path: '/proveedores', component: ProveedorList, title: "Proveedores", menuType: MenuType.BRAND },
  { path: '/partidas', component: PartidaList, title: "Partidas", menuType: MenuType.BRAND },
  { path: '/about', component: About, title: "About Us", menuType: MenuType.RIGHT },
  { path: '/contact', component: Contact, title: "Contact", menuType: MenuType.RIGHT }
]
