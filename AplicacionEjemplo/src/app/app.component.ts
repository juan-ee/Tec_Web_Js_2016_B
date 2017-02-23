import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //OnInit es el evento que muestra cuando esta listo el componente
  title: string = "Hola amigos";
  nombre: string;
  apellido: string;
  colorbg="red";
  tamanoh4="51px";

  //--nombre: string;
  //despues de los dos puntos escribimos el tipo de datp
  //se puede definir si es privado, por defecto es publico
  //--apellido: string;
  // en typescript ya no es necesaio escribir la palabra function para la funcion
  //tambien se puede escribir el modificador de acceso: void, public etc
  //tambien se puede devolver valores
  constructor() {
    this.apellido = "Erazo";
    this.nombre = "Juan";
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
  }
}
