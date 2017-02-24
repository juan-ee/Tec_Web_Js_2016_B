import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //OnInit es el evento que muestra cuando esta listo el componente
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanoH4 = "52px";
  classes = "btn btn-block btn-success";

  nuevaTienda: any = {};


  //--nombre: string;
  //despues de los dos puntos escribimos el tipo de datp
  //se puede definir si es privado, por defecto es publico
  //--apellido: string;
  // en typescript ya no es necesaio escribir la palabra function para la funcion
  //tambien se puede escribir el modificador de acceso: void, public etc
  //tambien se puede devolver valores
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
    this.apellido = "Erazo";
    this.nombre = "Juan";
    console.log("Inicio el constructor")
  }


  //PRIMERO SE EJECUTA EL CONSTRUCTOR Y LUEGO EL ONINIT()
  ngOnInit() {
    console.log("en el init");
    this.apellido = "Sanchez";
    this.nombre = "Enrique";
  }

  nombreCompleto2(): string {
    return this.apellido + " " + this.nombre;
  }
  hizoClick(){
    alert("hizo click");
  }
  mouseEncima(){
    alert("mouse encima!");
  }
  crearTienda(formulario){
    console.log(formulario);
    this._http.post(this._masterURL.url+"/tienda",{
      nombre:formulario.value.nombre
    }).subscribe(
      (res)=>{
        console.log("No hubo errores");
        console.log(res);
        this.nuevaTienda={};
      },
      (err)=>{
        console.log("Ocurrio un error",err);
      },
      ()=>{
        console.log("Termino la funcion");
      }

    );
  }
}
