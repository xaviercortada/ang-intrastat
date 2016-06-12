/**
 * Created by xavier on 22/05/16.
 */
import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { NgForm, NgControl } from '@angular/common';
import {PartidaService} from "../../services/PartidaService";
import {PartidaModel} from "../../models/partida-model";
import {ProveedorService} from "../../services/ProveedorService";
import {ProveedorModel} from "../../models/proveedor-model";
import {TransporteModel} from "../../models/transporte-model";
import {PaisModel} from "../../models/pais-model";
import {ResourceService} from "../../services/ResourceService";

@Component({
  selector:"partida-detail",
  templateUrl:"app/components/partida-detail/partida-detail.html"
})

export class PartidaDetail implements OnInit{
  public partida :PartidaModel;
  public proveedores :ProveedorModel[];
  public transportes :TransporteModel[];
  public paises :PaisModel[];

  @Output() close = new EventEmitter();

  constructor(public _partidaService: PartidaService,public _proveedorService :ProveedorService, 
              public _resourceService :ResourceService,public _routeParams : RouteParams){
    this.partida = new PartidaModel();
  }

  ngOnInit() {
    if (this._routeParams.get('id') !== null) {
      let id = this._routeParams.get('id');
      this._partidaService.GetSingle(id)
        .subscribe((data :any) => this.partida = data,
        error => console.log(error),
        () => console.log('Get single item complete'));

      this._proveedorService.GetAll()
        .subscribe((data : any) => this.proveedores = data,
          error => console.log(error),
          () => console.log('Get all proveedores complete'));

      this._resourceService.GetTransportes()
        .subscribe((data : any) => this.transportes = data,
          error => console.log(error),
          () => console.log('Get all transportes complete'));

      this._resourceService.GetPaises()
        .subscribe((data : any) => this.paises = data,
          error => console.log(error),
          () => console.log('Get all paises complete'));

      console.log(this.partida);
    }
  }


  goBack(partidaSaved :PartidaModel = null){
    window.history.back();
  }

  onSubmit(){
    console.log("submit");

    let x :any;

    this._partidaService.Update(this.partida.id, this.partida)
      .subscribe((result :any) => x = result,
        error => console.log(error),
        () => console.log('Get single item complete'));


  }

}
