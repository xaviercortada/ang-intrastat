/**
 * Created by xavier on 9/06/16.
 */
import {Component, OnInit} from "@angular/core";
import {PartidaService} from "../../services/PartidaService";
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ProveedorDetail} from "../proveedor-detail/proveedor-detail";
import {PartidaModel} from "../../models/partida-model";
import {Configuration} from "../../app.constants";
import {MaterialModel} from "../../models/material-model";

@Component({
  selector: 'material-list',
  templateUrl: 'app/components/material-list/material-list.html',
  providers: [PartidaService]

})
export class MaterialList implements OnInit {
  public partidas :MaterialModel[];
  constructor(private _router: Router, public _service : PartidaService){

  }

  ngOnInit(){
    this.GetAllItems();
  }

  onSelect(item :PartidaModel){
    let link = ['PartidaDetail', { id: item.id }];
    this._router.navigate(link);
  }



  private GetAllItems() :void{
    this._service
      .GetAll()
      .subscribe((data :any) => this.partidas = data,
        error => console.log(error),
        () => console.log('Get all items complete'));
  }
}
