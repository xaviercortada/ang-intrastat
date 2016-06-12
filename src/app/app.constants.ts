/**
 * Created by xavier on 26/05/16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Configuration{
  public Server :string = "http://localhost:8080/appintrastat/";
  public ApiUrl :string = "rest/";
  public ServerWithApiUrl :string = this.Server + this.ApiUrl;
}
