/**
 * Created by xavier on 22/05/16.
 */
import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ProveedorService} from "../../services/ProveedorService";
import {ProveedorModel} from "../../models/proveedor-model";
import { NgForm, NgControl } from '@angular/common';

@Component({
  selector:"proveedor-detail",
  templateUrl:"app/components/proveedor-detail/proveedor-detail.html"
})

export class ProveedorDetail implements OnInit{
  public proveedor :ProveedorModel;
  @Output() close = new EventEmitter();

  constructor(public _proveedorService: ProveedorService, public _routeParams : RouteParams){
    this.proveedor = new ProveedorModel();
  }

  ngOnInit() {
    if (this._routeParams.get('id') !== null) {
      let id = this._routeParams.get('id');
      this._proveedorService.GetSingle(id)
        .subscribe((data :any) => this.proveedor = data,
        error => console.log(error),
        () => console.log('Get single item complete'));

      console.log(this.proveedor);
    }
  }


  goBack(proveedorSaved :ProveedorModel = null){
    window.history.back();
  }

  onSubmit(){
    console.log("submit");

    let x :any;

    this._proveedorService.Update(this.proveedor.id, this.proveedor)
      .subscribe((result :any) => x = result,
        error => console.log(error),
        () => console.log('Get single item complete'));


  }

}
