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
  selector: 'login',
  templateUrl: 'app/components/login/login.html',
  styleUrls: ['app/components/login/login.css'],
  providers: [],
  directives: []
})
export class Login{
  private accounts :AuthModel[];

  constructor(private _service :LoginService, private _router :Router){
  }

  public login(email :string, password :string) :any {

    let authModel = new AuthModel(email, password );

    return this._service.Signin(authModel)
      .subscribe((data : any) => {
          localStorage.setItem('auth_token', data.authToken);

          this._router.navigate(['Home']);

        },
          error => console.log(error),
          () => console.log('Get all account complete'+this.accounts)
      );

  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}
