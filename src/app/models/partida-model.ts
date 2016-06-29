/**
 * Created by xavier on 9/06/16.
 */
import {ProveedorModel} from "./proveedor-model";
import {TransporteModel} from "./transporte-model";
import {PaisModel} from "./pais-model";
import {MaterialModel} from "./material-model";

export class PartidaModel{
  id :number;
  codigo :string;
  entrega :string;
  fecha :Date;
  transaccion :number;
  regimen :number;
  flujo :string;

  proveedor :ProveedorModel;
  transporte :TransporteModel;
  pais :PaisModel;
  
  materiales :MaterialModel[];


  
  constructor(){
    this.proveedor = new ProveedorModel();
    this.transporte = new TransporteModel();
    this.pais = new PaisModel();
  }

}
