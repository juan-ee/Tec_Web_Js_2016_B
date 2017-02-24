import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //OnInit es el evento que muestra cuando esta listo el componente
  title: string = "Tiendas";
  nuevaTienda: any = {};
  tiendas=[];
  disabledButton={
    NuevaTiendaFormSubmitButton:false
  };

  //--nombre: string;
  //despues de los dos puntos escribimos el tipo de datp
  //se puede definir si es privado, por defecto es publico
  //--apellido: string;
  // en typescript ya no es necesaio escribir la palabra function para la funcion
  //tambien se puede escribir el modificador de acceso: void, public etc
  //tambien se puede devolver valores
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }


  //PRIMERO SE EJECUTA EL CONSTRUCTOR Y LUEGO EL ONINIT()
  ngOnInit() {
    this._http.get(this._masterURL.url+"tienda")
      .subscribe(
      (res:Response)=>{
        this.tiendas=res.json().map((value)=>{
          value.formularioCerrado= true;
          return value;
        });
      },
      (err)=>{
        console.log("Ocurrio un error",err);
      },
    );
  }

  crearTienda(formulario:NgForm){
    this.disabledButton.NuevaTiendaFormSubmitButton=false;
    console.log(formulario);
    this._http.post(this._masterURL.url+"tienda",{
      nombre:formulario.value.nombre
    }).subscribe(
      (res)=>{
        console.log("No hubo errores");
        console.log(res);
        this.tiendas.push(res.json());
        this.nuevaTienda={};
        this.disabledButton.NuevaTiendaFormSubmitButton=false;
      },
      (err)=>{
        this.disabledButton.NuevaTiendaFormSubmitButton=false;
        console.log("Ocurrio un error",err);
      },
      ()=>{
        console.log("Termino la funcion");
      }
    );
  }

  actualizarTienda(tienda:any){
    let parametos = {
      nombre:tienda.nombre
    };
    this._http.put(this._masterURL.url+"tienda/"+tienda.id,parametos).subscribe(
      (res)=>{
        tienda.formularioCerrado=!tienda.formularioCerrado;
        console.log(res.json());
      },
      (err)=>{
        console.log("Ocurrio un error",err);
      },
    );
  }

  borrarTienda(id:number){
    this._http.delete(this._masterURL.url+"tienda/"+id)
      .subscribe(
        (res)=>{
          let tiendaBorrada=res.json();
          this.tiendas=this.tiendas.filter(value=>tiendaBorrada.id!=value.id);
        },
        (err)=>{
          console.log(err);
        }
      );
  }
}
