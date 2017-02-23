import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Hola Amigos";
  //--nombre: string;
  //despues de los dos puntos escribimos el tipo de datp
  //se puede definir si es privado, por defecto es publico
  //--apellido: string;
  // en typescript ya no es necesaio escribir la palabra function para la funcion
  //tambien se puede escribir el modificador de acceso: void, public etc
  //tambien se puede devolver valores
  constructor(private nombre: string, private apellido: string) {
    this.saludar();
    this.saludar2("Eguez");
  }
  saludar(): string {
    return `Hola, mi apellido es: ${this.apellido}`;
  }
  saludar2(nombre: string, apellido?: string){
    console.log(`${apellido} y ${nombre}`);
  }

}
