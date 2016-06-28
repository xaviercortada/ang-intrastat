/**
 * Created by xavier on 23/05/16.
 */

import {Component} from '@angular/core';
import {AuthModel} from "../../models/auth-model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Router} from "@angular/router-deprecated";
import {LoginService} from "../../services/LoginService";


//let template = require('./login.html');
//let styles = require('applogin.css');

@Component({
  selector: 'logout',
  templateUrl: 'app/components/logout/logout.html',
  styleUrls: ['app/components/logout/logout.css'],
  providers: [],
  directives: []
})
export class Logout{
  private accounts :AuthModel[];

  constructor(private _service :LoginService, private _router :Router){
  }

  public logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth-id');

    this._service.Logout();
    
    this._router.navigate(['Home']);

  }



}
