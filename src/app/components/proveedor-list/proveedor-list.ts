/**
 * Created by xavier on 21/05/16.
 */
import {Component, OnInit} from "@angular/core";
import {ProveedorService} from "../../services/ProveedorService";
import {Router} from '@angular/router-deprecated';
import {ProveedorModel} from "../../models/proveedor-model";

@Component({
  selector: 'proveedor-list',
  templateUrl: 'app/components/proveedor-list/proveedor-list.html',
  providers: [ProveedorService]

})
export class ProveedorList implements OnInit {
  public proveedores :ProveedorModel[];
  constructor(private _router: Router, public _proveedorService : ProveedorService){

  }

  ngOnInit(){
    this.GetAllItems();
  }

  onSelect(item :ProveedorModel){
    let link = ['ProveedorDetail', { id: item.id }];
    this._router.navigate(link);
  }



  private GetAllItems() :void{
    this._proveedorService
      .GetAll()
      .subscribe((data :any) => this.proveedores = data,
        error => console.log(error),
        () => console.log('Get all items complete'));
  }
}
