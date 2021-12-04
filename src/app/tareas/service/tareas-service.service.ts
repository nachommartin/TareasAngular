import { Injectable } from '@angular/core';
import { Tarea } from "../interface/tarea.interface";

let fecha1: Date = new Date("2022-01-16");  
let fecha2: Date = new Date("2021-12-31");  
let fecha3: Date = new Date("2021-11-29");  



@Injectable({
  providedIn: 'root'
})



export class TareasServiceService {



  private _tareas: Tarea[]=
  [
    {
      concepto: "Ir al banco",
      fecha: fecha1
    },
    {
      concepto: "Comprar uvas",
      fecha: fecha2
    },
    {
      concepto: "Mirar ofertas del Cyber Monday",
      fecha: fecha3
    },
    
  ]

  get tareas():Tarea[]{
    return [...this._tareas];
  }
 

  constructor() { 
    
    console.log("Servicio Tareas iniciado");

  }

    agregarTarea(tarea: Tarea){
        this._tareas.push(tarea);
    }



}
