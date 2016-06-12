/**
 * Created by xavier on 21/05/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Configuration} from "../app.constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {ProveedorModel} from "../models/proveedor-model";

@Injectable()
export class ProveedorService{
  private headers :Headers;
  private serverUrl :string = 'https://restcountries.eu/rest/v1/';

  constructor(private _http :Http, private _configuration :Configuration){

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  public GetAll() :Observable<Response>  {
    let actionUrl :string = this._configuration.ServerWithApiUrl + 'proveedores';
    return this._http.get(actionUrl)
      .map(res => {
        console.log(res);
        return res.json();
      })
      .catch(this.handleError);

  }

  public GetSingle(id: string): Observable<Response> {
    let actionUrl :string = this._configuration.ServerWithApiUrl + 'proveedores/' + id;
    return this._http.get(actionUrl)
      .map(res => {
        console.log(res);
        return res.json();
      })
      .catch(this.handleError);
  }

  public Update(id: number, item: ProveedorModel): Observable<Response> {
    let actionUrl :string = this._configuration.ServerWithApiUrl + 'proveedores/' + id;
    return this._http.put(actionUrl, JSON.stringify(item), {headers : this.headers})  ;
  }


  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
