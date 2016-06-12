/**
 * Created by xavier on 23/05/16.
 */

import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';


//let template = require('./login.html');
//let styles = require('applogin.css');

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.html',
  styleUrls: ['app/components/login/login.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Login{
  constructor(public _http :Http){
    console.log(_http);
  }

  login(event, usern, password){}

}
