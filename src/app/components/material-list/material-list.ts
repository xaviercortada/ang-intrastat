/**
 * Created by xavier on 9/06/16.
 */
import {Component, OnInit, Input} from "@angular/core";
import {PartidaService} from "../../services/PartidaService";
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {MaterialModel} from "../../models/material-model";

@Component({
  selector: 'material-list',
  templateUrl: 'app/components/material-list/material-list.html',
  providers: [PartidaService]

})
export class MaterialList implements OnInit {
  @Input() materiales :MaterialModel[];


  constructor(private _router: Router, public _service : PartidaService){

  }

  ngOnInit(){
    
  }

  onSelect(item :MaterialModel){
    let link = ['MatrerialDetail', { id: item.id }];
    this._router.navigate(link);
  }

  
}
