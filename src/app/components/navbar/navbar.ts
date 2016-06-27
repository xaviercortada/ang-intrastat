/**
 * Created by xavier on 21/05/16.
 */

import { Component, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ROUTES, MenuType, RouteInfo} from "../../routes";
import {LoginService} from "../../services/LoginService";

@Component({
  selector: 'navbar',
  providers: [],
  templateUrl: 'app/components/navbar/navbar.html',
  styleUrls: ['app/components/navbar/navbar.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Navbar {
  public menuItems: RouteInfo[];

  constructor(public loginService :LoginService) {
    this.menuItems = ROUTES;
  }

  public getMenuItemClasses(menuItem: RouteInfo) {
    let menuItemClass = {
      "nav-item": menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT,
      "pull-xs-right": menuItem.menuType === MenuType.RIGHT
    }
    return menuItemClass;
  }

  public getMenuItemAnchorClasses(menuItem: RouteInfo) {
    let menuItemAnchorClass = {
      "navbar-brand": menuItem.menuType === MenuType.BRAND,
      "nav-link": menuItem.menuType === MenuType.LEFT || menuItem.menuType === MenuType.RIGHT
    }
    return menuItemAnchorClass;
  }
}
