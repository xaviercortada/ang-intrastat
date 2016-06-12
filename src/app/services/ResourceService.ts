/**
 * Created by xavier on 21/05/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Configuration} from "../app.constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {PartidaModel} from "../models/partida-model";

@Injectable()
export class ResourceService{
  private headers :Headers;

  constructor(private _http :Http, private _configuration :Configuration){

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  public GetTransportes() :Observable<Response>  {
    let actionUrl :string = this._configuration.ServerWithApiUrl + 'resources/transportes';
    return this._http.get(actionUrl)
      .map(res => {
        console.log(res);
        return res.json();
      })
      .catch(this.handleError);

  }

  public GetPaises() :Observable<Response>  {
    let actionUrl :string = this._configuration.ServerWithApiUrl + 'resources/paises';
    return this._http.get(actionUrl)
      .map(res => {
        console.log(res);
        return res.json();
      })
      .catch(this.handleError);

  }


  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
