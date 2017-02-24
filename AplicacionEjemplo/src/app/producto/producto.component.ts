import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  private _parametros:any;
  _productos=[];
  nuevoProducto={};
  constructor(private _activetedRoute:ActivatedRoute, private _http:Http, private _masterURL:MasterURLService) { }

  ngOnInit() {
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._http.get(this._masterURL.url+'Producto?idTienda='+this._parametros.idTienda)
        .subscribe(
          (res)=>{
            this._productos=res.json();
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }
  crearProducto(nombre:string){
    console.log(nombre);
    let producto={
      nombre:nombre,
      idTienda:this._parametros.idTienda
    }
    this._http.post(this._masterURL.url+"producto",{
        nombre:nombre,
        idTienda:this._parametros.idTienda
      }
    ).subscribe(
      (res)=>{
        this._productos.push(res.json());
        this.nuevoProducto={};
        console.log("CREADO",res.json());
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
